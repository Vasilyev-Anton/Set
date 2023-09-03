import Team from '../app';
import Character from '../character';

test('should add character to the team', () => {
  const team = new Team();
  const character = new Character('Batman');
  team.add(character);
  expect(team.toArray()).toContain(character);
});

test('should not add duplicate characters to the team', () => {
  const team = new Team();
  const character1 = new Character('Batman');
  const character2 = new Character('Spiderman');
  team.add(character1);
  team.add(character2);
  expect(() => {
    team.add(character1);
  }).toThrow('Персонаж ранее уже был добавлен в команду');
  expect(team.toArray().length).toBe(2);
});

test('should add all characters to the team', () => {
  const team = new Team();
  const character1 = new Character('Batman');
  const character2 = new Character('Spiderman');
  team.addAll(character1, character2);
  expect(team.toArray()).toContain(character1);
  expect(team.toArray()).toContain(character2);
});

test('should add duplicate characters when using addAll', () => {
  const team = new Team();
  const character1 = new Character('Batman');
  const character2 = new Character('Spiderman');
  team.add(character1);
  team.addAll(character2, character1);
  expect(team.toArray().length).toBe(2);
});

test('should convert team to a valid array', () => {
  const team = new Team();
  const character1 = new Character('Batman');
  const character2 = new Character('Spiderman');
  team.addAll(character1, character2);
  expect(team.toArray()).toEqual([character1, character2]);
});
