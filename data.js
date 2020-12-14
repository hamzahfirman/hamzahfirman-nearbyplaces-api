let businessesInStates = { 
    businesses: [
    {
        id: 1,
        type: "restaurants",
        name: "Pizza Luna",
        states: "AZ",
        town: "Tucson",
        address: "1101 N Wilmot Rd, Tucson, AZ 85712",
        phone:"(520) 344-7637",
        image:"",
        categories:"Pizza",
        cost:"$$",
        hours:"12:00 PM - 8:00 PM",
        totalReviews:3,
        price:"standard",
        website: "pizza-luna.com",
        link: "https://pizza-luna.com/", 
        reviews: [{
            username: "hamzahfirman",
            review:"The BEST pizza place in town!"
        },{
            username: "andyle",
            review:"Standard taste ... "
        },{
            username: "antony123",
            review:"Trying the cheese one is a MUST~"
        } ]
    }, 
    {
        id:2,
        type: "restaurants",
        states: "AZ",
        town: "Tucson",
        name: "Culinary Dropout",
        address: "2543 E Grant Rd Tucson, AZ 85716",
        phone:"(520) 203-0934",
        image:"",
        categories:"American",
        cost:"$$",
        hours:"10:00 AM - 9:00 PM",
        totalReviews:3,
        price:"standard",
        website: "culinarydropout.com",
        link: "https://culinarydropout.com",
        reviews: [{
            username: "hamzahfirman",
            review:"The BEST pizza place in town!"
        },{
            username: "andyle",
            review:"Standard taste ... "
        },{
            username: "antony123",
            review:"Trying the cheese one is a MUST~"
        } ]
    }, 
    {
        id:3,
        type: "restaurants",
        states: "AZ",
        town: "Tucson",
        name: "Noodleholics",
        address: "3502 E Grant Rd Tucson, AZ 85716",
        phone:"(520) 305-4262",
        image:"",
        categories:"Noodles",
        cost:"$$",
        hours:"12:00 PM - 9:00 PM",
        totalReviews:3,
        price:"standard",
        website:"noodleholics.com",
        link: "https://noodleholics.com",
        reviews: [{
            username: "hamzahfirman",
            review:"The BEST pizza place in town!"
        },{
            username: "andyle",
            review:"Standard taste ... "
        },{
            username: "antony123",
            review:"Trying the cheese one is a MUST~"
        } ]
    },


    {
        id:4,
        type: "plumbers",
        name: "Cal's Plumbing",
        states: "AZ",
        town: "Tucson",
        address: "5959 S Country Club Rd, Tucson, AZ 85706",
        phone:"(520) 622-2257",
        image:"",
        categories:"Plumbing",
        cost:"$$",
        hours:"24 hours",
        totalReviews:3,
        price:"standard",
        website:"calsplumbing.com",
        link:"https://calsplumbing.com",
        reviews: [{
            username: "hamzahfirman",
            review:"The BEST pizza place in town!"
        },{
            username: "andyle",
            review:"Standard taste ... "
        },{
            username: "antony123",
            review:"Trying the cheese one is a MUST~"
        } ]
    }, 
     {
        id:5,
        type: "plumbers",
        states: "AZ",
        town: "Tucson",
        name: "Silverado Rooter & Plumbing",
        address: "1208 W Roger Rd Tucson, AZ 85705",
        phone:"(520) 696-0000",
        image:"",
        categories:"Plumbing",
        cost:"$",
        hours:"24 hours",
        totalReviews:3,
        price:"standard",
        website: "silveradoplumbing.com",
        link: "https://calsplumbing.com",
        reviews: [{
            username: "hamzahfirman",
            review:"The BEST pizza place in town!"
        },{
            username: "andyle",
            review:"Standard taste ... "
        },{
            username: "antony123",
            review:"Trying the cheese one is a MUST~"
        } ]
    },
    {
        id:6,
        type: "plumbers",
        states: "AZ",
        town: "Tucson",
        name: "Quality Plumbing Pros",
        address: "1101 N Wilmot Rd, Tucson, AZ 85712",
        phone:"(520) 599-9169",
        image:"",
        categories:"Plumbing",
        cost:"$$$",
        hours:"24 hours",
        totalReviews:3,
        price:"standard",
        website: "tucsonplumbingpros.com",
        link: "https://tucsonplumbingpros.com",
        reviews: [{
            username: "hamzahfirman",
            review:"The BEST pizza place in town!"
        },{
            username: "andyle",
            review:"Standard taste ... "
        },{
            username: "antony123",
            review:"Trying the cheese one is a MUST~"
        } ]
    },

    {
        id:7, 
        type: "auto repairs",
        name: "JT Auto",
        states: "AZ",
        town: "Tucson",
        address: "2530 E Fort Lowell Rd Tucson, AZ 85716",
        phone:"(520) 623-7066",
        image:"",
        categories:"Auto Repair",
        cost:"$$",
        hours:"8:30 AM - 5:00 PM",
        totalReviews:3,
        price:"standard",
        website:"1jtauto.com",
        link: "https://1jtauto.com",
        reviews: [{
            username: "hamzahfirman",
            review:"The BEST pizza place in town!"
        },{
            username: "andyle",
            review:"Standard taste ... "
        },{
            username: "antony123",
            review:"Trying the cheese one is a MUST~"
        } ]
    },
    {
        id:8,
        type: "auto repairs",
        states: "AZ",
        town: "Tucson",
        name: "Sooter's Auto Service",
        address: "429 E. 6th St. Tucson, AZ 85705",
        phone:"(520) 623-1002",
        image:"",
        categories:"Auto Repair",
        cost:"$$$",
        hours:"7:30 AM - 5:30 PM",
        totalReviews:3,
        price:"standard",
        website:"sootersauto.com",
        link:"https://sootersauto.com",
        reviews: [{
            username: "hamzahfirman",
            review:"The BEST pizza place in town!"
        },{
            username: "andyle",
            review:"Standard taste ... "
        },{
            username: "antony123",
            review:"Trying the cheese one is a MUST~"
        }]
    },
    {
        id: 9,
        type: "auto repairs",
        name: "GIBBS Automative Service",
        states: "AZ",
        town: "Tucson",
        address: "1132 N. Belvedere Ave. Tucson, AZ 85712",
        phone:"(520) 325-1431",
        image:"",
        categories:"Auto Repair",
        cost:"$",
        hours:"7:30 AM - 5:00 PM",
        totalReviews:3,
        price:"standard",
        website:"gibbsautomotivetucson.com",
        link:"https://gibbsautomotivetucson.com",
        reviews: [{
            username: "hamzahfirman",
            review:"The BEST pizza place in town!"
        },{
            username: "andyle",
            review:"Standard taste ... "
        },{
            username: "antony123",
            review:"Trying the cheese one is a MUST~"
        } ]
    },
] 

};



module.exports.businessesInStates = businessesInStates;


