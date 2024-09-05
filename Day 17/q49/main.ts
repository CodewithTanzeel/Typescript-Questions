const hobbies = (...hobby: string[]) => {
    // Looping an array
    hobby.forEach((hobby) => {
        console.log(`I enjoy ${hobby}. `);
    })
};

hobbies("Playing", "Reading", "Writing", "gardening")