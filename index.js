const Alexa = require('ask-sdk');

const title = 'MUSIC DIVA';

/***
 * LaunchRequest Handler
 * @type {{canHandle(*): *, handle(*): *}}
 */
const LaunchRequestHandler = {
    canHandle(handlerInput) {
        console.log('LaunchRequestHandler');
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest'
    },
    handle(handlerInput) {
        const speechText = 'Welcome to Music Diva. ';
        const repromptText = 'You can ask Music Diva to tell you top songs of 90`s, Best of Lata Mangeshkar, Hits of Shreya Ghoshal, Early life of Sonu Nigam, Reality Shows on Music, Winners of Indian Idol, Indian Classical Music, Classical Music Instruments, Seven Swara and Legendary singers. ';
        console.log(speechText);
        //   handlerInput.attributesManager.setSessionAttributes({'name': 'investment'});
        return handlerInput.responseBuilder
            .speak(speechText + repromptText)
            .reprompt(speechText + repromptText)
            .withSimpleCard(title, speechText + repromptText)
            .getResponse();
    }
};

/***
 * Top songs of 90's Handler
 * @type {{canHandle(*): *, handle(*): *}}
 */
const TopOldSongsHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'TopOldSongs';
    },
    handle(handlerInput) {
        const speechText ='Era of 90`s gave us melodious memories. Songs like Pehla Nasha, Nazar k samne, Chhaiyya Chhaiyya, Ek din Aap, ' +
            'ek ladki ko dekha, Dil dhak dhak krne lga, pehli bar mohabbat, won the heart of million people. ';
        const repromptText = 'Era of 90`s gave us melodious memories. Songs like Pehla Nasha, Nazar k samne, Chhaiyya Chhaiyya, Ek din Aap, ' +
            'ek ladki ko dekha, Dil dhak dhak krne lga, pehli bar mohabbat, won the heart of million people.';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .getResponse();
    }
};

/***
 * RealityShows Handler
 * @type {{canHandle(*): *, handle(*): *}}
 */
const RealityShowHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'RealityShows';
    },
    handle(handlerInput) {
        const speechText = 'There are numerous singing reality shows in India. Indian Idol, Sa Re Ga Ma Pa, Voice Of India, Rising star, ' +
            'India`s Got Talent are among them.';
        const repromptText = 'There are numerous singing reality shows in India. Indian Idol, Sa Re Ga Ma Pa, Voice Of India, Rising star, ' +
            'India`s Got Talent are among them.';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .withSimpleCard(title, speechText + repromptText)
            .withShouldEndSession(true)
            .getResponse();
    }
};

/***
 * IndianIdolWinner Handler
 * @type {{canHandle(*): *, handle(*): *}}
 */
const IndianIdolWinnerHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'IndianIdol';
    },
    handle(handlerInput) {
        const speechText = 'Indian Idol has given us a really great talent. Winner of Indian Idol Season 1 was Abhijeet Sawant, season 2`s winner was Sandeep Acharya, ' +
            '3rd season`s winner was Prashant Tamang ' +
            '4th season was won by Sourabhee Debbarma, she became the first female contestant to do so. Say "Tell more about Indian Idol" to know more';
        const repromptText = 'Indian Idol has given us a really great talent. Winner of Indian Idol Season 1 was Abhijeet Sawant, season 2`s winner was Sandeep Acharya, ' +
            '3rd season`s winner was Prashant Tamang' +
            '4th season was won by Sourabhee Debbarma, she became the first female contestant to do so.';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .withSimpleCard(title, speechText + repromptText)
            .getResponse();
    }
};

/***
 * IndianIdolWinnerpart2 Handler
 * @type {{canHandle(*): *, handle(*): *}}
 */
const IndianIdolWinner2Handler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'IndianIdoltwo';
    },
    handle(handlerInput) {
        const speechText = ' 5th season`s trophy goes to Sreeramchandra Mynampati. Vipul Mehta won the hearts of million people along with 6th season`s Indian Idol Title. and LV Revanth won the 9th season.';
        const repromptText = ' 5th season`s trophy goes to Sreeramchandra Mynampati. Vipul Mehta won the hearts of million people along with 6th season`s Indian Idol Title. and LV Revanth won the 9th season';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .withSimpleCard(title, speechText + repromptText)
            .withShouldEndSession(false)
            .getResponse();
    }
};

/***
 * SG Hits Handler
 * @type {{canHandle(*): *, handle(*): *}}
 */
const SGHitsHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'SGHits';
    },
    handle(handlerInput) {
        const speechText = 'Shreya Ghoshal has melodious voice. Every song that she sings is hit. Bairy piya, Agar Tum Mil jao, Ghoomar, Ye ishq Haayye, Dola re, Pal ek pal, Dhadak are among her hits.';
        const repromptText = 'Shreya Ghoshal has melodious voice. Every song that she sings is hit. Bairy piya, Agar Tum Mil jao, Ghoomar, Ye ishq Haayye, Dola re, Pal ek pal, Dhadak are among her hits.';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .withShouldEndSession(true)
            .getResponse();
    }
};

/***
 * LataJi Hits Handler
 * @type {{canHandle(*): *, handle(*): *}}
 */
const LataJiBestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'LataJiBest';
    },
    handle(handlerInput) {
        const speechText = 'Lata Mangeshkar is the Legend of Music Industry. She has sung more than thirty thousand songs. Yeh Galliyan ye chaubara, Aye mere vatan k logo, didi tera devar deewana, lag ja gale, dil to pagal h, Ek Radha ek meera are one of her bests';
        const repromptText = 'Lata Mangeshkar is the Legend of Music Industry. She has sung more than thirty thousand songs. Yeh Galliyan ye chaubara, Aye mere vatan k logo, didi tera devar deewana, lag ja gale, dil to pagal h, Ek Radha ek meera are one of her bests';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .withShouldEndSession(true)
            .getResponse();
    }
};

/***
 * Sonu Nigam Handler
 * @type {{canHandle(*): *, handle(*): *}}
 */
const SonuNigamHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'SonuNigam';
    },
    handle(handlerInput) {
        const speechText = 'Sonu Nigam was born on 30 July 1973 to Agam Kumar Nigam and Shobha Nigam, in the city of Faridabad, Haryana. ' +
            'Nigam began his singing career at the age of four, when he joined his father Agam Kumar Nigam on stage to sing Mohammed Rafi`s song "Kya Hua Tera Wada". ' +
            'To know about his music projects ask Music Projects of Sonu Nigam. ';
        const repromptText = 'Sonu Nigam was born on 30 July 1973 to Agam Kumar Nigam and Shobha Nigam, in the city of Faridabad, Haryana. ' +
            'Nigam began his singing career at the age of four, when he joined his father Agam Kumar Nigam on stage to sing Mohammed Rafi`s song "Kya Hua Tera Wada". ' +
            'To know about his music projects ask Music Projects of Sonu Nigam. ';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .withShouldEndSession(false)
            .getResponse();
    }
};

/***
 * Sonu Nigam  Hits Handler
 * @type {{canHandle(*): *, handle(*): *}}
 */
const SonuNigamHitsHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'NigamHits';
    },
    handle(handlerInput) {
        const speechText = 'Nigam has sung in  Hindi, Manipuri, Assamese, Bengali, Bhojpuri, ' +
            'Chhattisgarhi, English, Kannada, Maithili, Malayalam, Marathi, Nepali, Odia, Punjabi, Tamil, Telugu, Tulu and Urdu till date. Some of his hindi songs are' +
            'Kal ho na ho, Sandese Aate hain, Boley chudiyan, Kbhi alvida na kehna, abhi mujh mei khin, Yeh Dil Deewana, mujhse shadi krogi.';
        const repromptText = 'Nigam has sung in  Hindi, Manipuri, Assamese, Bengali, Bhojpuri,' +
            'Chhattisgarhi, English, Kannada, Maithili, Malayalam, Marathi, Nepali, Odia, Punjabi, Tamil, Telugu, Tulu and Urdu till date. Some of his hindi songs are' +
            'Kal ho na ho, Sandese Aate hain, Boley chudiyan, Kbhi alvida na kehna, abhi mujh mei khin, Yeh Dil Deewana, mujhse shadi krogi.';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .withShouldEndSession(true)
            .getResponse();
    }
};

/***
 * IndianClassical Handler
 * @type {{canHandle(*): *, handle(*): *}}
 */
const IndianClassicalHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'IndianClassical';
    },
    handle(handlerInput) {
        const speechText = 'Indian classical music is a genre of music from the Indian subcontinent. It has two major traditions: ' +
            'the North Indian classical music tradition is called Hindustani, while the South Indian expression is called Carnatic.' +
            'The roots of the classical music of India are found in the Vedic literature of Hinduism and the ancient Natyashastra,' +
            ' the classic Sanskrit text on performance arts by Bharata Muni.';
        const repromptText = 'Indian classical music is a genre of music from the Indian subcontinent. It has two major traditions: ' +
            'the North Indian classical music tradition is called Hindustani, while the South Indian expression is called Carnatic.' +
            'The roots of the classical music of India are found in the Vedic literature of Hinduism and the ancient Natyashastra,' +
            ' the classic Sanskrit text on performance arts by Bharata Muni.';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .withShouldEndSession(true)
            .getResponse();
    }
};

/***
 * LegendarySingers Handler
 * @type {{canHandle(*): *, handle(*): *}}
 */
const LegendarySingersHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'LegendarySingers';
    },
    handle(handlerInput) {
        const speechText = 'When it comes to Legendary Singers, the first name that comes up is of Lata Mangeskar. She has sung more than thirty thousands songs. ' +
            'Asha Bhosle, Kishore Kumar, Mohammed Rafi, Mukesh, Hari haran, Jagjit Singh, Kumar Sanu, Shreya Ghoshal, Sonu Nigam, and Alka Yagnik are one of the leading singers of not ' +
            'only Bollywood but also of many Film Industries like Tollywood. ';
        const repromptText = 'When it comes to Legendary Singers, the first name that comes up is of Lata Mangeskar. She has sung more than thirty thousands songs. ' +
            'Asha Bhosle, Kishore Kumar, Mohammed Rafi, Mukesh, Hari haran, Jagjit Singh, Kumar Sanu, Shreya Ghoshal, Sonu Nigam, and Alka Yagnik are one of the leading singers of not ' +
            'only Bollywood but also of many Film Industries like Tollywood. ';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .withShouldEndSession(true)
            .getResponse();
    }
};

/***
 * Saat Svara Handler
 * @type {{canHandle(*): *, handle(*): *}}
 */
const SaatSvaraHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'Svara';
    },
    handle(handlerInput) {
        const speechText = 'The seven notes of the musical scale in Indian classical music are shadja, rishabha, ' +
            'gandhara, madhyama, panchama, dhaivata and nishada. These seven swaras are shortened to Sa, Ri (Carnatic) ' +
            'or Re (Hindustani), Ga, Ma, Pa, Dha, and Ni. Collectively these notes are known as the sargam ';
        const repromptText = 'The seven notes of the musical scale in Indian classical music are shadja, rishabha, ' +
            'gandhara, madhyama, panchama, dhaivata and nishada. These seven swaras are shortened to Sa, Ri (Carnatic) ' +
            'or Re (Hindustani), Ga, Ma, Pa, Dha, and Ni. Collectively these notes are known as the sargam. ';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .withShouldEndSession(true)
            .getResponse();
    }
};

/***
 * Classical Instruments Handler
 * @type {{canHandle(*): *, handle(*): *}}
 */
const ClassicalInstrumentsHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'ClassicalInstruments';
    },
    handle(handlerInput) {
        const speechText = 'Instruments typically used in Indian Music are Tabla, Tanpura, Sitar, Mridangam, ' +
            'Veena, Dholak, Pakhavaj, Kanjira, Esraj, bansuri, santoor and violin';
        const repromptText = 'Instruments typically used in Indian Music are Tabla, Tanpura, Sitar, Mridangam, ' +
            'Veena, Dholak, Pakhavaj, Kanjira, Esraj, bansuri, santoor and violin';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .withShouldEndSession(true)
            .getResponse();
    }
};

/***
 * Help Intent Handler
 * @type {{canHandle(*): *, handle(*): *}}
 */
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent'
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('You can ask Music Diva questions like what are the top songs of 90`s, ' +
            'Best of Lata Mangeshkar, Hits of Shreya Ghoshal, Reality Shows on Music, Winners of Indian Idol, Seven Swars of music, early life of sonu nigam, indian classical music, classical instruments. ')
            .withShouldEndSession(false)
            .getResponse();
    }
};

/***
 * Session Ended Request Handler
 * @type {{canHandle(*): *, handle(*): *}}
 */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        const speech = 'Bye! Talk to you soon!';
        return handlerInput.responseBuilder
            .speak(speech)
            .getResponse();
    }
};

/***
 * Error Handler
 * @type {{canHandle(): boolean, handle(*, *): *}}
 */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`Error handled: ${error.message}`);

        return handlerInput.responseBuilder
            .speak('Sorry, I can\'t understand the command. Please say again.')
            .reprompt('Sorry, I can\'t understand the command. Please say again.')
            .getResponse();
    }
};


exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        TopOldSongsHandler,
        LataJiBestHandler,
        RealityShowHandler,
        IndianIdolWinnerHandler,
        IndianIdolWinner2Handler,
        SonuNigamHandler,
        SonuNigamHitsHandler,
        SGHitsHandler,
        IndianClassicalHandler,
        SaatSvaraHandler,
        LegendarySingersHandler,
        ClassicalInstrumentsHandler,
        HelpIntentHandler,
        SessionEndedRequestHandler,
    )
    .addResponseInterceptors()
    .addErrorHandlers(ErrorHandler)
    .lambda();
