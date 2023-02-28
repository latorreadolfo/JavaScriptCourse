const wideIdentifier = (w, h) => w > h ? `Widescreen: true.` : `Widescreen: false`;

console.log(wideIdentifier(1800, 1600));

console.log(wideIdentifier(600, 800));