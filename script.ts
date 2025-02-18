import { Map, diffFile, Difficulty } from './src/main.ts';
const INPUT: diffFile = Difficulty.Standard.ExpertPlus;
const OUTPUT: diffFile = Difficulty.Lawless.ExpertPlus;

const difficulty = Map.initialize(INPUT, OUTPUT, {
    njs: 16,
    offset: 0
});
// #region Noodle stuff below




// #endregion Noodle stuff above
Map.finalize(difficulty, {
    formatting: true
});