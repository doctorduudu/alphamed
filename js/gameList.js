let gameList;
gameList = [
    {
        name : "alopecia",
        summary : "Alopecia areata, also known as spot baldness, is a condition in which hair is lost from some or all areas of the body. Often it results in a few bald spots on the scalp, each about the size of a coin. Psychological stress may result. People are generally otherwise healthy.",
        etiology : ' genetics and the male hormone dihydrotestosterone(pattern hair loss), Infection, Drugs, Trauma, Pregnancy, autoimmune disorder',
        symptoms : 'Symptoms of hair loss include hair loss in patches usually in circular patterns, dandruff, skin lesions, and scarring.',
        source : "wikipedia",
        sourceLink: "https://wikipedia.org/wiki/alopecia",
        topic: "pathology",
        system: "cns",
        level: 1,
        type: 'clinical presentation'
    },
    {
        name : "anorexia nervosa",
        summary : 'Anorexia nervosa, often referred to simply as anorexia,[11] is an eating disorder characterized by low weight, fear of gaining weight, and a strong desire to be thin, resulting in food restriction.[1] Many people with anorexia see themselves as overweight even though they are in fact underweight.[1][2] If asked they usually deny they have a problem with low weight.[3] They weigh themselves frequently, eat only small amounts, and only eat certain foods.[1] Some will exercise excessively, force themselves to vomit, or use laxatives to produce weight loss.[1] Complications may include osteoporosis, infertility and heart damage, among others.[1] Women will often stop having menstrual periods.',
        etiology : 'There is evidence for biological, psychological, developmental, and sociocultural risk factors, but the exact cause of eating disorders is unknown.',
        symptoms : "A low body mass index for one's age and height, Amenorrhea, Fear of even the slightest weight gain.",
        source : "wikipedia",
        sourceLink: "https://wikipedia.org/wiki/anorexia",
        topic: "pathology",
        system: "cns",
        level: 2,
        type: 'clinical presentation'
    },
    {
        name : "cachexia",
        summary : "Cachexia, or wasting syndrome, is loss of weight, muscle atrophy, fatigue, weakness and significant loss of appetite in someone who is not actively trying to lose weight.Cachexia is seen in people with cancer, AIDS,[1] coeliac disease,[2] chronic obstructive pulmonary disease, multiple sclerosis, rheumatoid arthritis, congestive heart failure, tuberculosis, familial amyloid polyneuropathy, mercury poisoning (acrodynia), Crohn's disease, untreated/severe type 1 diabetes mellitus, anorexia nervosa and hormonal deficiency.",
        etiology : 'Cachexia is often seen in end-stage cancer, and in that context is called cancer cachexia. Patients with congestive heart failure can have a cachectic syndrome.',
        symptoms : 'Not Available',
        source : "wikipedia",
        sourceLink: "https://wikipedia.org/wiki/cachexia",
        topic: "pathology",
        system: "cns",
        level: 1,
        type: 'clinical presentation'
    },
    {
        name : "aneurysm",
        summary : "Cachexia, or wasting syndrome, is loss of weight, muscle atrophy, fatigue, weakness and significant loss of appetite in someone who is not actively trying to lose weight.Cachexia is seen in people with cancer, AIDS,[1] coeliac disease,[2] chronic obstructive pulmonary disease, multiple sclerosis, rheumatoid arthritis, congestive heart failure, tuberculosis, familial amyloid polyneuropathy, mercury poisoning (acrodynia), Crohn's disease, untreated/severe type 1 diabetes mellitus, anorexia nervosa and hormonal deficiency.",
        etiology : 'Cachexia is often seen in end-stage cancer, and in that context is called cancer cachexia. Patients with congestive heart failure can have a cachectic syndrome.',
        symptoms : 'Not Available',
        source : "wikipedia",
        sourceLink: "https://wikipedia.org/wiki/cachexia",
        topic: "pathology",
        system: "cvs",
        level: 1,
        type: 'clinical presentation'
    },
    {
        name : "aortic dissection",
        summary : "Cachexia, or wasting syndrome, is loss of weight, muscle atrophy, fatigue, weakness and significant loss of appetite in someone who is not actively trying to lose weight.Cachexia is seen in people with cancer, AIDS,[1] coeliac disease,[2] chronic obstructive pulmonary disease, multiple sclerosis, rheumatoid arthritis, congestive heart failure, tuberculosis, familial amyloid polyneuropathy, mercury poisoning (acrodynia), Crohn's disease, untreated/severe type 1 diabetes mellitus, anorexia nervosa and hormonal deficiency.",
        etiology : 'Cachexia is often seen in end-stage cancer, and in that context is called cancer cachexia. Patients with congestive heart failure can have a cachectic syndrome.',
        symptoms : 'Not Available',
        source : "wikipedia",
        sourceLink: "https://wikipedia.org/wiki/cachexia",
        topic: "pathology",
        system: "cvs",
        level: 2,
        type: 'clinical presentation'
    },
    {
        name : "arrhythmia",
        summary : "Cachexia, or wasting syndrome, is loss of weight, muscle atrophy, fatigue, weakness and significant loss of appetite in someone who is not actively trying to lose weight.Cachexia is seen in people with cancer, AIDS,[1] coeliac disease,[2] chronic obstructive pulmonary disease, multiple sclerosis, rheumatoid arthritis, congestive heart failure, tuberculosis, familial amyloid polyneuropathy, mercury poisoning (acrodynia), Crohn's disease, untreated/severe type 1 diabetes mellitus, anorexia nervosa and hormonal deficiency.",
        etiology : 'Cachexia is often seen in end-stage cancer, and in that context is called cancer cachexia. Patients with congestive heart failure can have a cachectic syndrome.',
        symptoms : 'Not Available',
        source : "wikipedia",
        sourceLink: "https://wikipedia.org/wiki/cachexia",
        topic: "pathology",
        system: "cvs",
        level: 1,
        type: 'clinical presentation'
    },
    {
        name : "gallbladder",
        summary : "Cachexia, or wasting syndrome, is loss of weight, muscle atrophy, fatigue, weakness and significant loss of appetite in someone who is not actively trying to lose weight.Cachexia is seen in people with cancer, AIDS,[1] coeliac disease,[2] chronic obstructive pulmonary disease, multiple sclerosis, rheumatoid arthritis, congestive heart failure, tuberculosis, familial amyloid polyneuropathy, mercury poisoning (acrodynia), Crohn's disease, untreated/severe type 1 diabetes mellitus, anorexia nervosa and hormonal deficiency.",
        etiology : 'Cachexia is often seen in end-stage cancer, and in that context is called cancer cachexia. Patients with congestive heart failure can have a cachectic syndrome.',
        symptoms : 'Not Available',
        source : "wikipedia",
        sourceLink: "https://wikipedia.org/wiki/cachexia",
        topic: "anatomy",
        system: "git",
        level: 2,
        type: 'general term'
    },
    {
        name : "heart",
        summary : "Cachexia, or wasting syndrome, is loss of weight, muscle atrophy, fatigue, weakness and significant loss of appetite in someone who is not actively trying to lose weight.Cachexia is seen in people with cancer, AIDS,[1] coeliac disease,[2] chronic obstructive pulmonary disease, multiple sclerosis, rheumatoid arthritis, congestive heart failure, tuberculosis, familial amyloid polyneuropathy, mercury poisoning (acrodynia), Crohn's disease, untreated/severe type 1 diabetes mellitus, anorexia nervosa and hormonal deficiency.",
        etiology : 'Cachexia is often seen in end-stage cancer, and in that context is called cancer cachexia. Patients with congestive heart failure can have a cachectic syndrome.',
        symptoms : 'Not Available',
        source : "wikipedia",
        sourceLink: "https://wikipedia.org/wiki/cachexia",
        topic: "anatomy",
        system: "cvs",
        level: 2,
        type: 'general term'
    },
    {
        name : "liver",
        summary : "Cachexia, or wasting syndrome, is loss of weight, muscle atrophy, fatigue, weakness and significant loss of appetite in someone who is not actively trying to lose weight.Cachexia is seen in people with cancer, AIDS,[1] coeliac disease,[2] chronic obstructive pulmonary disease, multiple sclerosis, rheumatoid arthritis, congestive heart failure, tuberculosis, familial amyloid polyneuropathy, mercury poisoning (acrodynia), Crohn's disease, untreated/severe type 1 diabetes mellitus, anorexia nervosa and hormonal deficiency.",
        etiology : 'Cachexia is often seen in end-stage cancer, and in that context is called cancer cachexia. Patients with congestive heart failure can have a cachectic syndrome.',
        symptoms : 'Not Available',
        source : "wikipedia",
        sourceLink: "https://wikipedia.org/wiki/cachexia",
        topic: "anatomy",
        system: "git",
        level: 1,
        type: 'general term'
    },
    {
        name : "lung",
        summary : "Cachexia, or wasting syndrome, is loss of weight, muscle atrophy, fatigue, weakness and significant loss of appetite in someone who is not actively trying to lose weight.Cachexia is seen in people with cancer, AIDS,[1] coeliac disease,[2] chronic obstructive pulmonary disease, multiple sclerosis, rheumatoid arthritis, congestive heart failure, tuberculosis, familial amyloid polyneuropathy, mercury poisoning (acrodynia), Crohn's disease, untreated/severe type 1 diabetes mellitus, anorexia nervosa and hormonal deficiency.",
        etiology : 'Cachexia is often seen in end-stage cancer, and in that context is called cancer cachexia. Patients with congestive heart failure can have a cachectic syndrome.',
        symptoms : 'Not Available',
        source : "wikipedia",
        sourceLink: "https://wikipedia.org/wiki/cachexia",
        topic: "anatomy",
        system: "cvs",
        level: 2,
        type: 'general term'
    },

    {
        name : "pancreas",
        summary : "Cachexia, or wasting syndrome, is loss of weight, muscle atrophy, fatigue, weakness and significant loss of appetite in someone who is not actively trying to lose weight.Cachexia is seen in people with cancer, AIDS,[1] coeliac disease,[2] chronic obstructive pulmonary disease, multiple sclerosis, rheumatoid arthritis, congestive heart failure, tuberculosis, familial amyloid polyneuropathy, mercury poisoning (acrodynia), Crohn's disease, untreated/severe type 1 diabetes mellitus, anorexia nervosa and hormonal deficiency.",
        etiology : 'Cachexia is often seen in end-stage cancer, and in that context is called cancer cachexia. Patients with congestive heart failure can have a cachectic syndrome.',
        symptoms : 'Not Available',
        source : "wikipedia",
        sourceLink: "https://wikipedia.org/wiki/cachexia",
        topic: "anatomy",
        system: "git",
        level: 2,
        type: 'general term'
    },

]



/* {
        name : '',
        summary : '',
        etiology: '',
        symptoms: '',
        source : ''
    }
*/
