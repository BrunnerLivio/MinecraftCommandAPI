// Replace with import * as mcapi from 'minecraftcommandapi'
import * as mcapi from '../../lib/index';

// Create a new zombie
let zombie: mcapi.IZombie = new mcapi.Zombie();

// Set some Tags
zombie.Tag.Invulnerable = true;
zombie.Tag.NoGravity = true;
zombie.Tag.Fire = 220;

// Create our Summon Command
let summonCommand: mcapi.ISummonCommand = new mcapi.SummonCommand(zombie);
// The SummonCommand as string
console.log(summonCommand.Command);

// Add a position
let position: mcapi.Position = new mcapi.Position(2, 3, 5, mcapi.PositionType.Relative);
summonCommand = new mcapi.SummonCommand(zombie, position);
console.log(summonCommand.Command);

// Go crazy

for (var i = 0; i < 10; i++) {
    zombie.Tag.AddPassenger(new mcapi.Zombie());
}
console.log(new mcapi.SummonCommand(zombie).Command);
