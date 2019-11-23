'use strict'
/*
    Current List of Disabilities:
    autism 
    dementia
    adhd
    aspergers
    motor neuron disease
    cystic fibrosis
    spina bifida
*/

const createNewUser = (name, postcode, phoneNumber, willing, additional) => {
    // additional will either be a dictionary containing 
    // { isCharity: true, specialities: [ ... ] } or a dictionary containing carees
    // where cares is { disability, since }

    let details = { name, postcode, phoneNumber, willing, charity: additional.isCharity };

    if (details.isCharity) {
        details.specialities = additional.specialities;
    } else {
        details.carees = details.carees;
    }

    return details;
};