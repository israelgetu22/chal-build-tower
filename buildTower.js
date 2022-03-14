// function tower(floors) {
//   let space, star;
//   let tower = [];
//   for (let i = 1; i <= floors; i++) {
//     space = " ".repeat(floors - 1);
//     star = "*".repeat(2 * i - 1);
//     tower.push(`${space}${star}${space}`);
//   }
//   return tower;
// }

// console.log(tower(6));

function tower(n) {
  for (let i = 0; i < n; i++) {
    let str = " ".repeat(n - 1 - i) + "*".repeat(2 * i + 1);
    console.log(str);
  }
}

console.log(tower(6));

const buildTower = (height) => {
  const charToBuildWith = "*";
  const spacerCharacter = " ";
  let towerArr = [];

  if (+height === 1 || +height % 3 === 0) {
    widthAtMaxHeight = height * 2 - 1;

    console.log(`Height: ${height}`);
    for (let i = 0; i < height; i++) {
      repeatNumber = i + i + 1;
      console.log(
        `${i} | ${repeatNumber} | ${charToBuildWith.repeat(repeatNumber)}`
      );
      spacer = (widthAtMaxHeight - repeatNumber) / 2;
      towerArr.push(
        `${spacerCharacter.repeat(spacer)}${charToBuildWith.repeat(
          repeatNumber
        )}${spacerCharacter.repeat(spacer)}`
      );
    }
    return towerArr;
  } else return "Tower must be 1 tall, or divisble by 3";
};

console.log(buildTower(6));
