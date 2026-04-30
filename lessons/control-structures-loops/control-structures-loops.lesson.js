let ninjas = ['Kai', 'Jay', 'Cole', 'Zane', 'Lloyd', 'Nya', 'Sensei Wu', 'Sora', 'Frak', 'Arin', 'Wyldfyre'];

/* Goal is to log all the ninjas who have an 'a' in their name */

if (ninjas[0].includes('a')) {
  console.log(ninjas[0]);
}

if (ninjas[1].includes('a')) {
  console.log(ninjas[1]);
}

if (ninjas[2].includes('a')) {
  console.log(ninjas[2]);
}

if (ninjas[3].includes('a')) {
  console.log(ninjas[3]);
}

if (ninjas[4].includes('a')) {
  console.log(ninjas[4]);
}

if (ninjas[5].includes('a')) {
  console.log(ninjas[5]);
}

if (ninjas[6].includes('a')) {
  console.log(ninjas[6]);
}

if (ninjas[7].includes('a')) {
  console.log(ninjas[7]);
}

if (ninjas[8].includes('a')) {
  console.log(ninjas[8]);
}

if (ninjas[9].includes('a')) {
  console.log(ninjas[9]);
}

if (ninjas[10].includes('a')) {
  console.log(ninjas[10]);
}

// before we get into loops, let's look at the ++ operator, which is a shortcut for adding 1 to a variable
let count = 0;
count = count + 1; // this is the regular way to add 1 to count
console.log(count); // 1
count++; // this is the shortest way to add 1 to count
console.log(count); // 2

// simplified using a for loop
for (let i = 0; i < ninjas.length; i++) {
  if (ninjas[i].includes('a')) {
    console.log(ninjas[i]);
  }
}

// simplified using a while loop
let i = 0;
while (i < ninjas.length) {
  if (ninjas[i].includes('a')) {
    console.log(ninjas[i]);
  }
  i++; // don't forget to increment i, otherwise you'll have an infinite loop!
}