const fs=require('fs'),vm=require('vm'),assert=require('assert');
let src=fs.readFileSync(__dirname+'/app.js','utf8');
src=src.slice(0,src.indexOf('function fillSelect'));
src+='\nthis.api={fresh,migrate,statsFor,sportStats,genericSportStats,statDefs,allSports,setState:(v)=>state=v,setSport:(v)=>state.currentGame.sport=v};';
const ctx={Date,Math,JSON,Object,String,Array};vm.createContext(ctx);vm.runInContext(src,ctx);
const api=ctx.api;
const legacy={teamName:'Legacy Tigers',settings:{title:'Old Soccer',accent:'#123456'},players:[{id:'p1',name:'Alex',number:'7'}],games:[{id:'g1',home:2,away:1,opponent:'Rivals',events:[{type:'GOAL',playerId:'p1'}]}],current:{opponent:'Next',home:0,away:0,events:[]}};
const migrated=api.migrate(legacy);
assert.equal(migrated.seasons.length,1);assert.equal(migrated.seasons[0].teams[0].name,'Legacy Tigers');assert.equal(migrated.seasons[0].teams[0].players[0].name,'Alex');assert.equal(migrated.games[0].sport,'Soccer');assert.equal(migrated.games[0].played,true);assert.equal(migrated.currentGame.sport,'Soccer');assert.equal(migrated.games[0].events.length,1);
for (const sport of ['Hockey','Soccer','Lacrosse','Softball']) {
 const st=api.fresh();st.currentGame.sport=sport;st.currentGame.events=[{type:'GOAL',playerId:'p1'},{type:'SHOT_ATTEMPT',playerId:'p1'},{type:'SHOT_ON_GOAL',playerId:'p1'},{type:sport==='Hockey'?'HIT':sport==='Soccer'?'TACKLE':sport==='Lacrosse'?'GROUND_BALL':'SAVE',playerId:'p1'}];
 api.setState(st);const stat=api.statsFor({id:'p1'},[st.currentGame]);assert.equal(stat.goals,1);assert.equal(stat.shots,3);assert.equal(stat.sog,2);assert.equal(Number(stat.shooting.toFixed(1)),33.3);
}
assert(api.sportStats.Hockey.some(x=>x[0]==='FACEOFF'));
assert(api.sportStats.Soccer.some(x=>x[0]==='TACKLE'));
assert(api.sportStats.Lacrosse.some(x=>x[0]==='GROUND_BALL'));
console.log('PASS: legacy migration fixture, built-in sport stat aggregation, generic custom-sport stat aggregation, shooting calculations');
