const products = [
    {
      id: 50,
      name: "ZAPATILLAS RUNNING ADIDAS CORERACER NEGRA HOMBRE",
      stock: 149,
      cost: 10499,
      description: "Las zapatillas ADIDAS Coreracer ofrecen la combinación perfecta de sujeción para running y estilo urbano. Son livianas y transpirables para mantener tus pies cómodos en todo momento. Lucen un logo ADIDAS Badge of Sport que le pone el toque final al look de alto rendimiento. Diseñada para corredores con pisada neutra.",
      capacity: 450,
      image: [
        "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-adidas-coreracer-negra-91317080-100010fx3593001-1.jpg",
      ],

      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 1,
      brandId: 95,
      packingId: null,
      category: {
        name: "Hombre",
        id: 1
      },
      brand: {
        id: 95,
        name: "ZAPATILLAS RUNNING ADIDAS",
      },
       reviews: []
    },
    {
      id: 51,
      name: "ZAPATILLAS RUNNING ADIDAS CORERACER NEGRA MUJER",
      stock: 379,
      cost: 10499,
      description: "Las zapatillas ADIDAS Coreracer ofrecen la combinación perfecta de comodidad y estilo. Su diseño liviano y transpirable brinda comodidad en todo momento y el logo adidas Badge of Sport les confiere un look de alto rendimiento. Diseñada para corredoras con pisada neutra.",
      capacity: 700,
      image: [
        "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-adidas-coreracer-mujer-negra-100010fx3603001-1.jpg",      
      ],

      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:41:05.347Z",
      categoryId: 2,
      brandId: 85,
      packingId: null,
      category: {
        name: "Mujer",
        id: 2
      },
      brand: {
        id: 85,
        name: "ZAPATILLAS RUNNING ADIDAS",
      },
       reviews: [
        {
          "comment": "Muy comodas y recomendables para entrenar",
          "rating": "7"
        }
      ]
    },
    {
      id: 9,
      name: "ZAPATILLAS RUNNING PUMA WIRED AZUL NIÑO",
      stock: 399,
      cost: 8499,
      description: "Las zapatillas PUMA Wired son perfectas incluso para los atletas más jóvenes. La parte superior de malla transpirable está acentuada por una banda elástica en el antepié con la marca PUMA llamativa. La cómoda plantilla SoftFoam + proporciona una amortiguación superior sin importar a dónde lo lleve el día. Cuenta con cordones elásticos.",
      capacity: 799,
      image: [
        "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-puma-wired-ni_o-ni_a-azul-640010384308013-1.jpg",
      ],

      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:43:05.347Z",
      categoryId: 3,
      brandId: 75,
      packingId: null,
      category: {
        name: "Niño",
        id: 3
      },
      brand: {
        id: 75,
        name: "ZAPATILLAS RUNNING PUMA",
      },
       reviews: [
        {
          "comment": "Muy comodas y recomendables para los niños",
          "rating": "7.5"
        }
      ]
    },
    {
      id: 45,
      name: "ZAPATILLAS RUNNING ADIDAS GALAXY 5 NEGRA HOMBRE",
      stock: 189,
      cost: 11499,
      description: "Esta zapatilla ADIDAS hace que cada paso sea bueno.La mediasuela CLOUDFOAM, confeccionada en EVA, fue modificada para obtener más propiedades de amortiguación y confort pisada tras pisada. La comodidad y el confort pueden ser el complemento perfecto en los entrenamientos para los atletas que van iniciando y/o son ocasionales. Diseñada para corredores con pisada neutra.",
      capacity: 500,
      image: [
        "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-adidas-galaxy-5-negra-100010h04597001-1.jpg",
      ],

      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:45:05.347Z",
      categoryId: 1,
      brandId: 95,
      packingId: null,
      category: {
        name: "Hombre",
        id: 1
      },
      brand: {
        id: 95,
        name: "ZAPATILLAS RUNNING ADIDAS",
      },
       reviews: []
    },
    {
      id: 13,
      name: "ZAPATILLAS ADDNICE KILKA NIÑA FUCSIA ",
      stock: 149,
      cost: 5999,
      description: "Con un diseño deportivo y una comodidad que acompañará a las más peques durante todo el día, la zapatilla ADDNICE Kilka es la ideal para todas sus tareas diarias.",
      capacity: 500,
      image: [
        "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-addnice-kilka-ni_a-fucsia-32001gc05419a48-1.jpg",
      ],

      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:47:05.347Z",
      categoryId: 4,
      brandId: 65,
      packingId: null,
      category: {
        name: "Niña",
        id: 4
      },
      brand: {
        id: 65,
        name: "ZAPATILLAS ADDNICE",
      },
       reviews: [
        {
          "comment": "Muy comodas y recomendables para los niñas",
          "rating": "8"
        }
      ]
    },
    {
      id: 78,
      name: "ZAPATILLAS RUNNING ASICS GT-1000 9 MUJER NEGRA",
      stock: 99,
      cost: 20999,
      description: "Las zapatillas de running GT-1000™ 9 son sinónimo de ligereza y comodidad. Están provistas de una combinación de las tecnologías FLYTEFOAM™ y GEL™, ubicadas estratégicamente más cerca del suelo y en la parte trasera del pie, que no solo aportan ligereza y comodidad al calzado, sino que también contribuyen a absorber los impactos. Gracias a la combinación de la tecnología DYNAMIC DUOMAX® y la tecnología TRUSSTIC SYSTEM® en el mediopié, estas aplicaciones mantienen sus pies estables y soportados. Las zapatillas de running GT-1000™ 9 no solo cuentan con un gran elenco de características técnicas de alto rendimiento que te acompañarán kilómetro tras kilómetro, sino que también destacan por el tejido de malla altamente transpirable y el diseño versátil, muy fácil de combinar con todo tipo de ropa.",
      capacity: 300,
      image: [
        "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-asics-gt-1000-9-mujer-negra-13001012a651002-1.jpg",      ],

      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:47:05.347Z",
      categoryId: 2,
      brandId: 85,
      packingId: null,
      category: {
        name: "Mujer",
        id: 2
      },
      brand: {
        id: 85,
        name: "ZAPATILLAS RUNNING ASICS",
      },
       reviews: []
    },
    {
      id: 98,
      name: "ZAPATILLAS RUNNING NIKE ZOOM WINFLO 8 AZUL HOMBRE",
      stock: 99,
      cost: 21999,
      description: "Las NIKE Winflo 8 recuperan la amortiguación que tanto te gusta y la combina con otros detalles, como una parte superior translúcida y la tecnología Flywire que brinda un ajuste estable y cómodo para las carreras largas sobre asfalto. Las unidades Nike Zoom Air en el talón y el antepié ofrecen una amortiguación ligera y reactiva desde que el pie aterriza hasta que despega, lo que te ayuda a alcanzar grandes velocidades más rápido. Diseñada para corredores con pisada neutra.",
      capacity: 350,
      image: [
        "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-nike-zoom-winflo-8-azul-510010cw3419401-1.jpg",
      ],

      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:49:05.347Z",
      categoryId: 1,
      brandId: 95,
      packingId: null,
      category: {
        name: "Hombre",
        id: 1
      },
      brand: {
        id: 95,
        name: "ZAPATILLAS RUNNING NIKE",
      },
       reviews: []
    },
    {
      id: 16,
      name: "BOTINES DE FUTBOL KAPPA BANDA KOMPO TF NIÑO NEGRO",
      stock: 50,
      cost: 6499,
      description: "Botines de fútbol con capellada sintética con costuras y suela TG para superficies de césped Sintético. Logo KAPPA Banda en contra tono aplicado en el lateral de capellada.",
      capacity: 199,
      image: [
        "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/b/o/botines-de-futbol-kappa-banda-kompo-tf-ni-o-negro-39501304u30002g-1.jpg",
      ],

      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:51:05.347Z",
      categoryId: 3,
      brandId: 75,
      packingId: null,
      category: {
        name: "Niño",
        id: 3
      },
      brand: {
        id: 75,
        name: "BOTINES DE FUTBOL KAPPA",
      },
       reviews: [
        {
          "rating": "9",
        }
      ]
    },
    {
      id: 90,
      name: "ZAPATILLAS ADDNICE RUNNING VARSOVIA CORDON NIÑA GRIS",
      stock: 200,
      cost: 4399,
      description: "Las zapatillas Varsovia de niña están pensadas para llevar la moda de los más pequeños a otro nivel. Debido a la naturaleza de exclusiva calidad de los materiales, podría ocurrir que en algunos casos el producto destiñera levemente, sobre todo en condiciones de humedad. Mientras esté mojada, se aconseja que la zapatilla no entre en contacto con otras prendas claras hasta que no esté completamente seca.",
      capacity: 545,
      image: [
        "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatilla-addnice-running-varsovia-cordon-ni_a-gris-32001r1aacj02cu-1.jpg",
      ],

      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:53:05.347Z",
      categoryId: 4,
      brandId: 65,
      packingId: null,
      category: {
        name: "Niña",
        id: 4
      },
      brand: {
        id: 65,
        name: "ZAPATILLAS ADDNICE RUNNING",
      },
       reviews: [
        {
          "rating": "6.5",
        }
      ]
    },
    {
      id: 85,
      name: "BOTINES DE FUTBOL ADIDAS PREDATOR FREAK.3 TF BLANCO HOMBRE",
      stock: 499,
      cost: 16999,
      description: "Desatá el demonio que llevás dentro con los ADIDAS Predator. Podrás ponertelos con facilidad gracias a su lengüeta flexible integrada. Ya en tus pies, el exterior textil revestido y corte medio de mayor soporte te ayudarán a dominar el partido con comodidad. La zona de impacto con impresión 3D Demonscale permite una mayor adherencia a la pelota para que puedas ejercer un total control en la cancha. Diseñado para canchas de césped sintético.",
      capacity: 999,
      image: [
        "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/b/o/botines-de-futbol-adidas-predator-freak-3-tf-blanco-100010fy6309001-1.jpg",
      ],

      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:55:05.347Z",
      categoryId: 1,
      brandId: 95,
      packingId: null,
      category: {
        name: "Hombre",
        id: 1
      },
      brand: {
        id: 95,
        name: "BOTINES DE FUTBOL ADIDAS",
      },
       reviews: [
        {
          "rating": "10",
        }
      ]
    },
    {
      id: 55,
      name: "ZAPATILLAS RUNNING ADIDAS SUPERNOVA + X MARIMEKKO MUJER NEGRA",
      stock: 49,
      cost: 26499,
      description: "Con estas zapatillas de running ADIDAS vas a sentirte segura de vos misma antes de dar tu primer paso gracias al divertido estampado de la casa de diseño finlandesa Marimekko. La amortiguación receptiva Boost se combina con la tecnología Bounce para brindarte una pisada más cómoda, y el exterior de tejido suave crea un balance perfecto entre flexibilidad y soporte. Este producto está hecho con Primegreen, una serie de materiales reciclados de alto rendimiento. El 50 % del exterior está hecho con material reciclado.",
      capacity: 200,
      image: [
        "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-adidas-supernova-x-marimekko-mujer-negra-100010gz8906001-1.jpg",      
      ],

      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:57:05.347Z",
      categoryId: 2,
      brandId: 85,
      packingId: null,
      category: {
        name: "Mujer",
        id: 2
      },
      brand: {
        id: 85,
        name: "ZAPATILLAS RUNNING ADIDAS",
      },
       reviews: [
        {
          "rating": "9.5",
        }
      ]
    },
    {
      id: 56,
      name: "ZAPATILLA ADIDAS GRAND COURT NIÑO NEGRA",
      stock: 500,
      cost: 9999,
      description: "Estas zapatillas para niños se inspiran en el deporte blanco con un exterior de cuero sintético y las 3 Tiras en contraste. La plantilla liviana les proporciona una pisada más cómoda en todo momento.",
      capacity: 1100,
      image: [
        "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatilla-adidas-grand-court-ni_o-ni_a-negra-100010ef0102001-1.jpg",
      ],

      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:59:05.347Z",
      categoryId: 3,
      brandId: 75,
      packingId: null,
      category: {
        name: "Niño",
        id: 3
      },
      brand: {
        id: 75,
        name: "ZAPATILLA ADIDAS",
      },
       reviews: [
        {
          "rating": "10",
        }
      ]
    },
    {
      id: 19,
      name: "ZAPATILLAS RUNNING ADIDAS TENSAUR NIÑA NEGRA",
      stock: 600,
      cost: 8999,
      description: "Estas zapatillas acompañan los momentos de diversión de los más pequeños. El exterior de cuero suave incluye las 3 Tiras selladas brinda un look dinámico y deportivo.",
      capacity: 1300,
      image: [
        "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-adidas-tensaur-ni_o-ni_a-negra-56664443-100010s24036001-1.jpg",
      ],

      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T20:01:09.347Z",
      categoryId: 4,
      brandId: 65,
      packingId: null,
      category: {
        name: "Niña",
        id: 4
      },
      brand: {
        id: 65,
        name: "ZAPATILLAS RUNNING ADIDAS",
      },
       reviews: []
    },
    {
      id: 66,
      name: "ZAPATILLAS NIKE AIR MAX SC MUJER ROSA",
      stock: 399,
      cost: 17499,
      description: "Con sus líneas simples, el look de atletismo tradicional y, por supuesto, la amortiguación Air visible, la NIKE Air Max SC es la elección perfecta para cualquier outfit. La rica mezcla de materiales agrega profundidad, a la vez que lo convierte en un calzado duradero y ligero para el día a día. La unidad Max Air, diseñada originalmente para el running de alto rendimiento, agrega una amortiguación ligera con cada pisada. La suela de goma ofrece una mayor tracción y durabilidad.",
      capacity: 800,
      image: [
        "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-nike-air-max-sc-mujer-rosa-510010cw4554600-1.jpg",      
      ],

      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T20:05:09.347Z",
      categoryId: 2,
      brandId: 85,
      packingId: null,
      category: {
        name: "Mujer",
        id: 2
      },
      brand: {
        id: 85,
        name: "ZAPATILLAS NIKE",
      },
       reviews: []
    },
    {
      id: 33,
      name: "ZAPATILLAS TOPPER ZURICH 2 NIÑO BLANCA",
      stock: 800,
      cost: 6799,
      description: "Se renueva este clasico colegial, ahora sin velcro pero manteniendo la estructura de antes. Un calzado muy versatil y cómodo.",
      capacity: 1500,
      image: [
        "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-topper-zurich-ni-o-ni-a-blanca-800010025540001-1.jpg",
      ],

      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T20:10:06.347Z",
      categoryId: 3,
      brandId: 75,
      packingId: null,
      category: {
        name: "Niño",
        id: 3
      },
      brand: {
        id: 75,
        name: "ZAPATILLAS TOPPER",
      },
       reviews: [
        {
          "rating": "7",
        }
      ]
    },
    {
      id: 39,
      name: "ZAPATILLAS TOPPER ARROW NIÑA BLANCA",
      stock: 450,
      cost: 5799,
      description: "Una nueva propuesta escolar, super canchera con detalles de color en las suelas.",
      capacity: 1050,
      image: [
        "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-topper-arrow-ni_a-blanca-800010025922001-1.jpg",
      ],

      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T20:16:15.347Z",
      categoryId: 4,
      brandId: 65,
      packingId: null,
      category: {
        name: "Niña",
        id: 4
      },
      brand: {
        id: 65,
        name: "ZAPATILLAS TOPPER",
      },
       reviews: []
    },
  ];

 export default products; 