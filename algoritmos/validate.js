function validate(dt, str) {
  const now = new Date();
  const item = new Date(dt);

  item.setDate(item.getDate() + Number(str.replace(/\D/g, '')));
  
  if (item > now) {
    console.log(`${item.toDateString()} ainda não expirou!`);
  } else {
    console.log(`${item.toDateString()} já expirou!`)
  }
}

// Invocando função
validate("2021-12-10T00:00:00.000Z", "180d");