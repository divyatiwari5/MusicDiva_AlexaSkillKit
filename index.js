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
        const speechText = 'Welcome to Music Diva';
        const repromptText = 'You can ask Music Diva to tell you top songs of 90`s, Best of Lata Mangeshkar, Hits of Shreya Ghoshal, Reality Shows on Music, Winners of Indian Idol';
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
        const speechText ='Era of 90`s gave us melodious memories. Songs like Pehla Nasha, Nazar k samne, Chhaiyya Chhaiyya, Ek din Aap, ek ladki ko dekha, Dil dhak dhak krne lga, pehli bar mohabbat, ' +
            'won the heart of million people';
        const repromptText = 'Era of 90`s gave us melodious memories. Songs like Pehla Nasha, Nazar k samne, Chhaiyya Chhaiyya, Ek din Aap, ek ladki ko dekha, Dil dhak dhak krne lga, pehli bar mohabbat, ' +
            'won the heart of million people';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .getResponse();
    }
};

/***
 * Singers of 60's Handler
 * @type {{canHandle(*): *, handle(*): *}}
 */
/*const OldSingersHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'Singers';
    },
    handle(handlerInput) {
        const speechText = 'Top Singers of the Golden Era of 60`s were: Lata Mangeshkar, Asha Bhosle, Kishore Kumar, Mohammad Rafi, Mukesh, Manna Dey & Hemanta Mukherjee';
        const repromptText = 'Top Singers of the Golden Era of 60`s were: Lata Mangeshkar, Asha Bhosle, Kishore Kumar, Mohammad Rafi, Mukesh, Manna Dey & Hemanta Mukherjee';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .getResponse();
    }
};*/

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
        const speechText = 'There are numerous singing reality shows in India. Indian Idol, Sa Re Ga Ma Pa, Voice Of India, Rising star, India`s Got Talent are among them.';
        const repromptText = 'There are numerous singing reality shows in India. Indian Idol, Sa Re Ga Ma Pa, Voice Of India, Rising star, India`s Got Talent are among them.';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .withSimpleCard(title, speechText + repromptText)
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
        const speechText = 'Indian Idol has given us a really great talent. Winner of Indian Idol Season 1 was Abhijeet Sawant, season 2`s winner was Sandeep Acharya, 3rd season`s winner was Prashant Tamang ' +
            '4th season was won by Sourabhee Debbarma, she became the first female contestant to do so. Say "Tell more about Indian Idol" to know more';
        const repromptText = 'Indian Idol has given us a really great talent. Winner of Indian Idol Season 1 was Abhijeet Sawant, season 2`s winner was Sandeep Acharya, 3rd season`s winner was Prashant Tamang' +
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
        const speechText = ' 5th season`s trophy goes to Sreeramchandra Mynampati. Vipul Mehta won the hearts of' +
            'million people along with 6th season`s Indian Idol Title. and LV Revanth won the 9th season.';
        const repromptText = ' 5th season`s trophy goes to Sreeramchandra Mynampati. Vipul Mehta won the hearts of' +
            'million people along with 6th season`s Indian Idol Title. and LV Revanth won the 9th season';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .withSimpleCard(title, speechText + repromptText)
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
        const speechText = 'Lata Mangeshkar is the Legend of Music Industry. She has sung more than thirty thousand songs. ' +
            'Yeh Galliyan ye chaubara, Aye mere vatan k logo, didi tera devar deewana, lag ja gale, dil to pagal h, Ek Radha ek meera are one of her bests';
        const repromptText = 'Lata Mangeshkar is the Legend of Music Industry. She has sung more than thirty thousand songs. ' +
            'Yeh Galliyan ye chaubara, Aye mere vatan k logo, didi tera devar deewana, lag ja gale, dil to pagal h, Ek Radha ek meera are one of her bests';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
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
        SGHitsHandler,
        SessionEndedRequestHandler,
    )
    .addResponseInterceptors()
    .addErrorHandlers(ErrorHandler)
    .lambda();
