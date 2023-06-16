const parseEnv = () => {
  const prefix = 'RSS_';
  const arr = [];
  for (const [name, value] of Object.entries(process.env)) {
    if (name.startsWith(prefix)) {
      arr.push(`${name}=${value}`)
    }
  }

  console.log(arr.reverse().join('; '))
};

parseEnv();