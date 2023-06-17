const metadata = {
    contactInfo : {
        email: "nte@ntecanada.com",
        phone: "(902) 461-7533",
        fax: "(902) 461-7537",
        address: '339 Windmill Road',
        city :"Dartmouth",
        province: "Nova Scotia",
        postalCode:"B3A 1H8" ,
        webiste: 'www.ntecanada.com',
        fullAddress: '339 Windmill Road, Dartmouth, NS B3A1H8'
    },  
    electricServices : [
        "Repair and overhaul all kind of electric motor, pump, hydraulic pump, DC Starter, DC Motor",
        "Rebuit, remanufacture Electro mechanic component to resume client's equipment uptime",
        "Field services and troubleshooting. Site intervention to restore system operation",
    ],
    distributeService: [
        "Weight & traffic solution",
        "Speed Camera",
        "Alcohol Tester",
    ],
    electricServicesCustomers : [
       " Ski Martock",
        "Mitchelin Tire",
        "Halifax Water",
        "TRC Hydraulic",
        "Victro Architect Glass"
    ],
    technologicalEquipmentCustomers: [
        "BCA logo",
        "BQP",
        "BGTTV",
        "PETROVIETNAM",
        "VIETSOPETRO",
        "JVPC",
    ],
    fieldServices : [
        "Troubleshooting",
        "Control Automation system",
        "Other Services",
    ],
    slideshow: [   
            {   
                id: 0,
                url:'/section1/photo1.jpg',
                title:'NTE: Leading AC/DC motor repair services with outstanding expertise for over 38 years',
                button:'About Us',
                link : '/about-us'
            },
            {
                id: 1,
                url:'/section1/photo2.jpg',
                title:`Restore your equipment, saving you from purchasing expensive replacements.
                Onsite service calls to minimize downtime and maximize uptime
               `,
                button:'Schedule a Service call',
                link: '/contact-us',
            },
            {
                id: 2,
                url:'/section1/photo3.jpg',
                title:'Over 15 years of exporting technology equipment to Vietnam',
                button:'VIEW EQUIPMENT SALES',
                link: '/products',
            },
            
    ],
    awards: [   
        {   
            id: 0,
            url:'/certificates/a1.jpg',
            title:'Bronze Level Partner',
            year:2010,
            button:'Click here',
            from:'Kustom Signals, Inc.'
        },
        {   
            id: 1,
            url:'/certificates/a2.jpg',
            title:'20 years Achievement Award',
            year:2005,
            button:'Click here',
            from: '',
        },
        {   
            id: 2,
            url:'/certificates/a3.png',
            title:'20 years Achievement Award',
            year:2005,
            button:'Click here',
            from:'Members of Halifax Regional Council'
        },
        {   
            id: 3,
            url:'/certificates/a4.png',
            title:'Certificate of Appreciation',
            year:2005,
            button:'Click here',
            from:'Intoximeters Inc.'
        },
        {   
            id: 4,
            url:'/certificates/a5.jpg',
            title:'Certificate of Appreciation',
            year:2012,
            button:'Click here',
            from:'Intoximeters Inc.'
        },
        {   
            id: 5,
            url:'/certificates/a6.jpg',
            title:'Certificate as Authorized distributor',
            year: '',
            button:'Click here',
            from:'Protech Armored Products of Massachusetts Inc.'
        },
        {   
            id: 6,
            url:'/certificates/a7.jpg',
            title:'Bronze Level Partner',
            year:2011,
            button:'Click here',
            from:'Kustom Signals, Inc.'
        },
        
    ],
    quicklinks: [
        {
            label:"About",
            href:"/about-us"
          },
          {
            label: "Products",
            href: "/products",
          },
          {
            label: "Services",
            href: "/services",
          },
          {
            label: "Contact",
            href: "/contact-us",
        },
    ],
    exportClient : [
        {
            name: "Law Enforcement" ,
            logo: "/section2/logo1.jpg",
            title: "LAW ENFORCEMENT logo"          
        },
        {
            name:"Massload" ,
            logo: "/section2/logo4.jpg",  
            title: "Massload logo" ,        
        },
        {
            name:"Kustom Signals" ,
            logo: "/section2/logo2.jpg",  
            title: "KUSTOM SIGNAL logo" ,        
        },
        {
            name: "Intoximeter",
            logo: "/section2/logo3.jpg", 
            title: "INTOXIMETER logo"          
        },
    ],
    servicePage: [
        {
            title: "Equipment brand we repaired",
            item: [
                "SEW Eurodrive Gear box",
                "Baldor motor",
                "General Electric GE motor",
                "ABB motor",
                "US motor",
                "Vulcan Food",
                "Hobart Food",
                "Grundfos",
                "Capacitor",
                "Switch",
                "Westinghouse",
                "WEG motor",
                "Nord gearbox"
            ]
        } ,
         {
            title: "Restaurant equipment",
            item: [
                "Exhaust fan",
                "Blower",
                "Mixer",
                "Steamer"
            ]
        } ,
         {
            title: "Food processing",
            item: [
                "Meat slicer",
                "Meat saw"
            ]
        } ,
        {
            title: "Light industries",
            item: [
                "Automatic sliding gate",
                "Table saw",
                "Concrete mixer",
                "Carpet cutting machine",
                "Air Compressor",
                "VFD Vairable speed drive KB, Schneider, ABB, Mitsubishi",
                "Pump",
                "Blower fan/Exhaust fan",
                "Submersible pump",
                "Step motor",
                "PLC",
                "Motion control",
                "Automation control",
                "Gear Motor",
                "Break",
                "DC motor",
                "DC Starter",
                "Electric oven",
                "Ventilation",
                "Conveyor system",
                "Generator",
                "Transformer",
                "Commercial Vacuum machine"
            ]
        } ,
    ],
    productPage : [
        {
            product: "Speed enforcement equipment" ,
            vendor: "KUSTOM SIGNALS" ,
            photo: "/products/product1.jpg",
            link: "https://kustomsignals.com/product-category/handheld-lidar",
        },
        {
            product: "Video enforcement equipment" ,
            vendor: "KUSTOM SIGNALS" ,
            photo: "/products/product2.png",
            link: "https://kustomsignals.com/video",
        },
        {
            product: "Alcohol Tester" ,
            vendor: "INTOXIMETERS" ,
            photo: "/products/product3.png",
            link: "https://www.intox.com/breath-alcohol-testers/",
        },
        {
            product: "Traffic Solutions" ,
            vendor: "MASSLOAD" ,
            photo: "/products/product4.jpg",
            link: "https://www.massload.com/products/traffic-solutions/",
        },

    ]
}

export default metadata;