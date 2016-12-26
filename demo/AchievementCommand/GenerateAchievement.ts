// Replace with import * as mcapi from 'minecraftcommandapi'
import * as mcapi from '../../lib/index';

// Give Achievement 'Open Inventory' to Player 'SutrangSucher'
let command: String = new mcapi.AchievementCommand()
    .Give(mcapi.Achievement.openInventory)
    .To('SutrangSucher')
    .Command;
console.log(command);

// Take Achievement 'Acquire Iron' from the nearest player
command = new mcapi.AchievementCommand()
    .Take(mcapi.Achievement.acquireIron)
    .From('@p')
    .Command;
console.log(command);

// Take all Achievements from every player
command = new mcapi.AchievementCommand()
    .Take(mcapi.Achievement.all)
    .From('@a')
    .Command;
console.log(command);