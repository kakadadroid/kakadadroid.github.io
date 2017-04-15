defaultOptions = {
  chart: { type: 'line', backgroundColor: '#fdfdfd' },
  yAxis: { title: { text: null } },
}

Highcharts.chart('series', Object.assign({}, defaultOptions, {
  title: { text: 'Random series' },
  legend: { enabled: false },
  xAxis: {
    plotBands: [{
      color: '#FCFFC5',
      from: 247,
      to: 307
    }]
  },
  series: [{
    data: [0.4981496176,0.8829824727,0.2356204317,0.28918446,0.8339799566,0.4030331997,0.2528087327,0.7787838638,0.5154205067,0.2226628421,0.7207319844,0.582298704,0.1989198961,0.6624783416,0.6124037807,0.1816653167,0.6060817166,0.6135863585,0.1709333023,0.5530946366,0.5927634198,0.1667333333,0.5046496386,0.5559147197,0.3732946841,0.4615404017,0.5081132515,0.549383184,0.4242959863,0.4535805712,0.669032265,0.3932469422,0.3957591697,0.7418572746,0.3685824556,0.3373953886,0.776713596,0.3503980116,0.2806275678,0.7815824735,0.3387332703,0.2270751821,0.7635154066,0.3336,0.1779256584,0.7286248629,0.5096096962,0.1340163624,0.682110475,0.6945823183,0.09590990943,0.6283113229,0.8216897119,0.06396149338,0.5707762992,0.9006424433,0.03837735171,0.5123458701,0.9404129818,0.01926380595,0.4552397588,0.9491120802,0.006666548148,0.4011461637,0.9339255836,0.0005999999136,0.3513090776,0.9010992225,0.1445350294,0.3066110921,0.8559603486,0.3386014494,0.2676497529,0.8029670137,0.4733656567,0.234806092,0.7457761895,0.5586294242,0.2083043996,0.6873242636,0.603479808,0.1882626356,0.6299141688,0.6161558001,0.1747331234,0.5753046134,0.6039772994,0.1677333328,0.5247978495,0.5733237587,0.2780401325,0.4793232549,0.5296512644,0.4814111928,0.4395147059,0.4775382433,0.624032596,0.4057802935,0.4207513988,0.7157930688,0.3783633899,0.3623248252,0.7658915561,0.3573944243,0.3046464921,0.7826938607,0.3429329794,0.2495474134,0.7736535182,0.3349999981,0.1983898093,0.7452840685,0.4100943619,0.1521514255,0.7031712797,0.6229819478,0.1115038933,0.652015311,0.7736627234,0.0768836098,0.5956942213,0.872107871,0.0485540866,0.5373415847,0.9276253213,0.02665908164,0.4794322334,0.948706095,0.0112660946,0.4238712908,0.9429368175,0.00239999447,0.3720826697,0.9169653821,0.04066700307,0.3250940852,0.876508113,0.2632839122,0.2836163718,0.82638821,0.4222279404,0.2481155063,0.7705966817,0.5275479732,0.2188762249,0.7123683398,0.5886578156,0.196056502,0.6542667023,0.6141719422,0.1797324409,0.5982728131,0.6118093868,0.1699333194,0.5458740163,0.5883525593,0.1666666667,0.4981496176,0.5496491394,0.4022870984,0.4558511266,0.5006466233,0.5696998664,0.4194753993,0.4454505304,0.6820871733,0.3893295088,0.387398651,0.7489653706,0.3655865628,0.3291450082,0.7790704474,0.3483319833,0.2727483832,0.7802530251,0.3375999689,0.2197613033,0.7594300864,0.3334,0.1713163053,0.7225813863,0.5399613508,0.1282070684,0.6747799182,0.7160498507,0.09096265294,0.6202472379,0.8356989316,0.05991360889,0.5624258364,0.9085239413,0.0352491223,0.5040620553,0.9433802627,0.01706467827,0.4472942345,0.9482491401,0.005399937014,0.3937418488,0.9301820733,0.0002666666591,0.3445923251,0.8952915296,0.1762763628,0.3006830291,0.8487771416,0.361248985,0.2625765761,0.7949779895,0.4883563786,0.23062816,0.7374429658,0.5673091099,0.2050440184,0.6790125368,0.6070796485,0.1859304726,0.6219064255,0.6157787468,0.1733332148,0.5678128303,0.6005922503,0.1672666666,0.5179757443,0.5677658891,0.311201696,0.4732777587,0.5226270153,0.505268116,0.4343164195,0.4696336803,0.6400323234,0.4014727587,0.4124428562,0.7252960909,0.3749710663,0.3539909303,0.7701464747,0.3549293023,0.2965808355,0.7828224668,0.34139979,0.2419712801,0.7706439661,0.3343999995,0.1914645162,0.7399904253,0.4447067991,0.1459899215,0.6963179311,0.6480778595,0.1061813726,0.64420491,0.7906992626,0.07244696018,0.5874180655,0.8824597355,0.04503005655,0.5289914919,0.9325582227,0.02406109095,0.4713131588,0.9493605273,0.009599646107,0.41621408,0.9403201848,0.001666664815,0.365056476,0.9119507352,0.07676102861,0.3188180922,0.8698379464,0.2896486145,0.27817056,0.8186819776,0.4403293901,0.2435502765,0.7623608879,0.5387745377,0.2152207533,0.7040082514,0.594291988,0.1933257483,0.6460989001,0.6153727617,0.1779327613,0.5905379574,0.6096034842,0.1690666611,0.5387493363,0.5836320488,0.2073336697,0.4917607518,0.5431747797,0.4299505788,0.4502830385,0.4930548767,0.5888946071,0.414782173,0.4372633484,0.6942146399,0.3855428915,0.3790350065,0.7553244823,0.3627231687,0.320933369,0.7808386089]
  }]
}));

function plot(el, title, mse, prediction) {
  Highcharts.chart(el, Object.assign({}, defaultOptions, {
    title: { text: title },
    subtitle: { text: 'MSE=' + mse },
    series: [{
        name: 'True value',
        data: [0.1914645162,0.7399904253,0.4447067991,0.1459899215,0.6963179311,0.6480778595,0.1061813726,0.64420491,0.7906992626,0.07244696018,0.5874180655,0.8824597355,0.04503005655,0.5289914919,0.9325582227,0.02406109095,0.4713131588,0.9493605273,0.009599646107,0.41621408,0.9403201848,0.001666664815,0.365056476,0.9119507352,0.07676102861,0.3188180922,0.8698379464,0.2896486145,0.27817056,0.8186819776,0.4403293901,0.2435502765,0.7623608879,0.5387745377,0.2152207533,0.7040082514,0.594291988,0.1933257483,0.6460989001,0.6153727617,0.1779327613,0.5905379574,0.6096034842,0.1690666611,0.5387493363,0.5836320488,0.2073336697,0.4917607518,0.5431747797,0.4299505788,0.4502830385,0.4930548767,0.5888946071,0.414782173,0.4372633484,0.6942146399,0.3855428915,0.3790350065,0.7553244823,0.3627231687,0.320933369,0.7808386089]
      }, {
        name: 'Predictions',
        data: prediction,
      }
    ]
  }));
}

plot('base_graph',
  'base.yaml',
  0.06041,
  [0.497048,0.526781,0.464327,0.485022,0.530338,0.46898,0.4626,0.528561,0.47279,0.448608,0.528187,0.478491,0.441239,0.529419,0.485541,0.438312,0.531661,0.493462,0.438532,0.534445,0.501833,0.441101,0.537393,0.510273,0.445492,0.528443,0.515317,0.449994,0.499944,0.513784,0.453024,0.481115,0.513275,0.457682,0.470633,0.514258,0.4636,0.466011,0.516292,0.4704,0.465623,0.518953,0.47772,0.468408,0.521868,0.48522,0.473631,0.518644,0.491051,0.479887,0.490108,0.489382,0.483617,0.471119,0.488563,0.489418,0.460567,0.48927,0.496748,0.455758,0.491007,0.50509]
);

plot('wide_graph',
  'wide.yaml',
  0.0204341,
  [0.387264,0.702516,0.470405,0.305164,0.67367,0.512612,0.289478,0.632015,0.577241,0.329981,0.599787,0.637115,0.318293,0.567036,0.687101,0.299955,0.529864,0.726521,0.294751,0.48541,0.754066,0.308943,0.434148,0.768009,0.341601,0.34366,0.7482,0.36699,0.263995,0.697584,0.396503,0.327745,0.670042,0.451074,0.366753,0.644112,0.502241,0.384744,0.620281,0.544673,0.397519,0.595269,0.577246,0.412211,0.566958,0.598759,0.428394,0.511756,0.597317,0.451462,0.395325,0.542005,0.516754,0.427627,0.51041,0.573506,0.428808,0.484463,0.621645,0.421654,0.460022,0.659901]
);

plot('deep_graph',
  'deep.yaml',
  0.067179,
  [0.473243,0.473439,0.47324,0.473208,0.473434,0.473263,0.473113,0.473378,0.473265,0.473048,0.473342,0.473287,0.473024,0.473332,0.473323,0.473027,0.47334,0.473367,0.473051,0.47336,0.473414,0.473088,0.473386,0.473462,0.473134,0.473362,0.473467,0.47316,0.473242,0.473393,0.473149,0.47315,0.47334,0.47316,0.473107,0.473319,0.473187,0.473099,0.473319,0.473225,0.473115,0.473334,0.473268,0.473149,0.473359,0.473313,0.473195,0.473362,0.473337,0.473236,0.473252,0.473266,0.473227,0.473162,0.473213,0.473243,0.473122,0.473191,0.473275,0.473117,0.473192,0.473318]
);

plot('long_graph',
  'long.yaml',
  0.00468709,
  [0.257888,0.779749,0.458562,0.163609,0.744406,0.576464,0.0546673,0.69482,0.714379,0.0107312,0.662758,0.7959,-0.00510314,0.638048,0.857268,-0.0051384,0.609745,0.899014,0.0105357,0.577524,0.925554,0.0377224,0.542195,0.938947,0.0737903,0.452201,0.890448,0.182391,0.287292,0.779295,0.379993,0.199425,0.725092,0.493166,0.161889,0.689275,0.572705,0.145906,0.658717,0.625069,0.149962,0.630972,0.656629,0.168321,0.604869,0.671348,0.197715,0.552498,0.646421,0.272227,0.402673,0.52748,0.483687,0.358363,0.44738,0.586908,0.346366,0.397929,0.66649,0.349823,0.352245,0.720345]
);