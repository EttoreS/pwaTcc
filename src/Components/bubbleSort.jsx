import React, { Component } from "react";

class Bubble extends Component {
    constructor(props){
        super(props)
        this.state = {
            time: null, 
            array:[26704,41406,31409,1844,33826,8051,49401,9010,44733,45162,22278,32267,4141,23856,37547,33212,18493,3981,5271,28422,16359,43823,49303,17792,29103,8569,7028,35586,8158,41571,18249,408,46085,24649,35438,34465,33491,42365,28285,18278,12820,30502,35193,44280,33075,30813,33149,31642,16574,42528,5313,15090,20024,6057,32531,22493,7362,25892,21010,9545,1126,37767,3419,25023,42392,49827,14793,36761,16774,38767,47803,6739,45363,9664,34179,13529,45069,32614,30372,31672,32363,153,5911,40530,28080,6936,42335,49657,18634,37164,49045,43772,40795,5873,40007,18096,32953,37314,41808,43928,35755,27420,19280,25173,28892,27605,9601,28780,8878,4001,49626,45956,44715,19644,14023,16468,44491,7095,3745,25328,26169,45506,35317,9725,10071,29239,31519,44209,38926,14823,3100,3804,33700,9212,39376,37988,9931,15152,42778,23291,9752,28737,48719,48637,49425,40215,17517,25500,40806,21516,19534,4436,17883,43055,8155,20639,36307,47914,37829,33757,14643,23706,35942,21449,976,1119,28023,31856,27471,23424,45486,47514,8469,23092,13919,12115,44827,10058,27795,21919,18310,21134,14403,35684,45083,1642,25784,10483,6590,38382,22492,25961,39461,37758,27146,16227,43455,44065,28865,36860,7938,20755,11960,4302,12870,21827,13521,6311,29884,11391,34921,45053,32688,46953,41676,38945,23682,25964,34574,25420,45521,5803,12557,24387,22101,44508,24437,41382,13423,23285,22200,10136,22666,2123,33396,46614,11887,26681,13907,10441,14790,48007,25250,45084,31180,36654,2483,45153,47927,19257,39796,27757,5500,38744,20882,14965,17500,39022,10329,16121,2988,1185,414,32015,7864,11068,24950,37719,22084,17359,8116,37278,44058,45321,11550,21389,2241,13709,27452,48696,16610,11471,38870,12401,19509,26418,30951,46502,6151,30204,38505,20194,49991,12704,5926,14665,47092,24119,15247,23901,46683,25018,6903,19919,32124,12921,25637,23361,37697,38989,20902,22309,21798,49946,17122,35814,16395,38421,44185,23706,35953,9589,32691,973,6410,23176,31625,23236,16228,47716,48374,19665,47100,18251,42309,11060,11436,19617,23492,13746,7407,24880,17527,44465,49,2579,6030,7472,48653,16967,39757,12699,26554,32646,48034,43034,19271,48689,33808,9498,40938,27635,48390,5443,26981,1576,33721,44754,43053,30987,2896,44469,46416,11890,1588,39269,46131,23506,3981,43813,32710,31623,46910,9035,36199,12576,44978,233,24055,38949,7624,7988,16652,20914,46322,37797,28731,26421,16437,10686,39742,9429,33554,44965,4618,7761,38603,28851,39249,31270,9520,34698,1709,46550,29766,18220,41073,26611,25646,40293,608,22641,25007,44651,41026,30271,19671,22125,42547,14611,32734,40937,1570,26709,49721,23010,8911,39084,19537,48256,31760,49498,17102,22364,20787,234,34644,48726,27149,34813,32708,1875,41545,15286,35121,7983,8922,1033,44411,47865,27956,44352,35428,9251,14002,39008,5330,28049,37857,15407,17487,22841,394,10073,25347,42878,14865,47724,49876,17514,44533,11370,10766,14166,33164,39609,27299,32671,19873,30559,9493,36203,47844,48722,3942,42806,8495,24473,41620,27031,8839,5844,6876,8161,9979,18809,7787,30094,8929,15372,28116,18044,24310,38400,30226,28956,48848,8397,6476,45741,48055,40161,43847,275,14990,26654,22867,46479,35597,33266,17260,42731,27721,28192,45144,42370,39659,33624,46124,32107,30810,18063,21159,800,7888,12245,23680,15218,4980,19858,31139,25195,24757,9532,5880,17874,1100,16421,23030,39612,540,109,980,4588,1005,541,16930,11105,21611,5215,25976,40209,26471,38956,27253,16303,38845,12271,34775,16186,29346,15488,13757,21156,33354,23666,35485,16652,8339,31627,35056,5285,11335,19339,26694,12029,10486,5380,40769,24886,42274,30229,45131,30341,37788,21719,917,20629,17277,32171,29599,18940,42043,427,33725,39510,16776,32284,18538,21832,3367,9688,5433,2077,39371,32451,11128,10306,418,16216,38276,9002,6061,16942,34303,17054,42837,25265,25251,43431,16638,23757,20551,36482,48892,26323,12804,38051,47479,21756,13898,16403,13867,22822,25078,38338,42508,28151,33951,28817,27165,36679,15842,5910,11588,13427,40378,19958,8670,40989,46753,18448,13093,3265,2722,2318,47342,36693,3058,35120,9913,49529,42917,13835,37584,1536,20397,8957,672,4903,30395,31944,21363,2138,8815,40122,40388,48232,22168,42679,6605,22504,22631,26532,27356,20148,2770,27537,44879,24785,37294,30750,45500,41045,41434,43278,13855,20607,6857,44625,13955,45977,46387,32379,12574,43807,38196,45602,8133,33552,8665,14318,40007,27876,30622,1159,29042,38382,40298,20391,39934,3935,42004,40306,10097,49169,24279,47268,7643,47575,5043,23607,13206,7000,6176,16956,16453,15365,29826,5654,28359,30902,19791,43399,34570,24363,41303,46449,3508,30256,1730,18379,15294,40436,12801,40632,43970,26113,12277,41934,6069,3724,19226,46009,33128,16003,42455,34979,34394,32056,46077,5320,38682,29294,49649,34330,41101,5648,2906,17684,31204,32679,26688,32818,44007,48892,2360,28688,4265,7855,21751,39700,27447,37572,28427,20544,47876,35970,38995,49054,15699,22311,30036,46266,39519,35908,12278,16356,803,21580,38633,14325,29514,15975,6870,5935,7790,85,20858,42699,9978,11069,16518,34496,42816,10856,39982,13798,19150,39889,35765,48419,32231,41852,12204,24183,45313,29266,49903,35014,23061,20405,6468,35528,7101,15182,47427,30435,27939,41332,48912,45790,49427,42546,22396,49454,9974,47018,5606,12004,6791,48297,46566,24771,15571,306,29677,18670,48248,24906,3686,6086,25719,3506,21496,48166,30760,23849,40838,31593,8739,29348,13021,22136,218,21117,4207,47121,20011,42190,49955,45303,41879,29333,39152,10602,6681,317,7839,45636,44474,3560,46980,32058,37870,42639,40715,17341,4754,341,3290,11822,43368,25608,23503,35600,11725,12076,5273,2162,6341,38683,11697,24513,12326,11284,27858,30022,18058,39157,4550,22183,22826,1819,31080,31074,15135,9667,10350,49406,12668,36629,23550,7764,32305,4208,24933,876,49,24110,49423,36561,16237,10973,47068,40399,10974,7634,28731,12095,8394,22836,16839,44009,16044,15315,43474,28388,17446,18798,25667,47479,21748,39598,24348,9863,14243,22226,9088,17134,5499,18715,5495,17333,44864,14186,45943,25439,46186,4614,27153,16667,19733,42714,90,25291,14495,14393,28599,10324,49332,31323,3289,29464,49752,24838,36251,44447,9495,2582,40382,14159,12556,32124,14334,16722,31810,45084,10397,28093,14950,11251,7969,22695,27132,14613,49730,1084,42394,22279,21086,40726,12701,22847,16011,8568,44293,22947,34039,18309,25899,29403,43805,10997,32348,9730,28298,34913,20123,15553,45771,49567,38467,21915,48112,29076,815,30429,45424,42210,46522,5764,41518,39917,22123,13033,40112,36315,24686,48332,35583,25786,27230,5880,5366,37096,47616,3010,13259,35232,27840,38588,14238,43083,10250,41369,21737,17983,30834,22240,7759,32653,47451,28368,4681,26152,32611,7831,15170,8067,36290,30500,13222,18342,14109,24633,35031,15948,20191,28949,13101,41850,32023,26781,861,25648,6719,22319,17838,30688,14229,38921,17437,9449,3261,16020,40312,19575,29909,4220,16379,31041,17361,7866,17642,36641,17406,569,42159,11232,10958,41962,26730,49996,15292,3305,42166,2320,10297,15460,20382,5895,4680,35254,46964,15081,35762,35230,26357,8671,33272,7439,39362,4828,28390,34044,14247,5135,4154,16247,23447,35459,12332,18323,47567,48652,24857,25401,17201,2973,45008,32028,934,30574,24673,23539,4835,12372,19214,33762,34715,29223,10747,10728,47482,14406,43952,46652,32043,39140,45953,29735,13366,21110,43226,3080,15557,5767,44052,20366,1101,31572,24568,18846,23783,3282,40151,37703,42232,11873,31551,43810,39500,5769,6963,37563,31663,35661,7055,48607,25010,14417,49881,44977,47101,4282,6522,19489,31667,15954,26368,34038,31155,27930,12982,45875,13571,10002,47677,9919,22204,11763,18098,47668,37785,5552,33408,46390,32699,3407,45980,1925,45982,49251,1900,44647,35992,20829,9042,40929,34890,10702,41986,41782,35367,41986,47644,6261,35417,12469,24091,9708,1365,232,17791,5909,32856,4981,21214,47865,26071]
        }
    }
    render() {
        return(
            <div>
                <h3>Bubble</h3>
                <button onClick={this.triggerFunc.bind(this)}>Bubble sort</button>
                <p>Result time Bubble {this.state.time}</p>
            </div>
        )
    }

    bubbleSort(){
        let swapp;
        let n = this.state.array.length-1;
        let x=this.state.array;
        do {
            swapp = false;
            for (let i=0; i < n; i++)
            {
                if (x[i] < x[i+1])
                {
                let temp = x[i];
                x[i] = x[i+1];
                x[i+1] = temp;
                swapp = true;
                }
            }
            n--;
        } while (swapp);
        return x
    }

    triggerFunc(){
        let t0 = performance.now();

        this.bubbleSort()

        let t1 = performance.now();
        this.setState({
            time: (t1 - t0)
        })
    }
}

export default Bubble;