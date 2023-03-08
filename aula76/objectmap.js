const profiles = [
    { id: 3, name: 'Steven' },
    { id: 2, name: 'Robert' },
    { id: 1, name: 'Matthew' }
];

// const newProfiles = {};
// for (const profile of profiles) {
//     const { id } =  profile;
//     newProfiles[id] = { ...profile };
// }

const newProfiles = new Map();
for (const profile of profiles) {
    const { id } = profile;
    newProfiles.set(id, { ...profile });
}

for (const [identifier, { id, name }] of newProfiles) {
    console.log(identifier, id, name);
}