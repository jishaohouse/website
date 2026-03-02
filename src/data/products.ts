export interface Product {
  id: string;
  image: string;
  name: {
    en: string;
    zh: string;
  };
  description: {
    en: string;
    zh: string;
  };
  parameters?: {
    label: { en: string; zh: string };
    value: { en: string; zh: string };
  }[];
  advantages?: {
    en: string;
    zh: string;
  }[];
  colors?: {
    name: { en: string; zh: string };
    value: string; // CSS color or image path
  }[];
}

export const products: Product[] = [
  {
    id: '55',
    image: '/products/55.jpg',
    name: {
      en: '55 Vertical Folding Window',
      zh: '55 上下折叠窗'
    },
    description: {
      en: 'High-performance vertical folding window system that seamlessly connects indoor and outdoor spaces.',
      zh: '高性能上下折叠窗系统，完美实现室内外空间的无缝连接。'
    },
    parameters: [
      {
        label: { en: 'Profile Configuration', zh: '型材配置' },
        value: { en: '6063-T5 high-precision aluminum profile', zh: '6063-T5 高精级铝型材' }
      },
      {
        label: { en: 'Wall Thickness', zh: '型材壁厚' },
        value: { en: 'Guangqi: 46 x 45mm 1.4mm thick', zh: '光企：46 × 45mm 1.4mm厚' }
      },
      {
        label: { en: 'Sealed Configuration', zh: '密封配置' },
        value: { en: 'Automotive grade EPDM sealant strip', zh: '汽车级三元乙丙密封胶条' }
      },
      {
        label: { en: 'Glass Configuration', zh: '玻璃配置' },
        value: { en: '5+20A+5mm insulated tempered glass', zh: '5+20A+5mm 中空钢化玻璃' }
      },
      {
        label: { en: 'Hardware System', zh: '五金系统' },
        value: { en: 'Imported brand customized hardware', zh: '进口品牌定制五金' }
      },
      {
        label: { en: 'Lower Rail Accessories', zh: '下轨配件' },
        value: { en: 'Flat rail, barrier flat rail, barrier high rail', zh: '平轨、挡边平轨、挡边高轨' }
      }
    ],
    advantages: [
      {
        en: '100% fully open: The fan can be fully opened to achieve seamless connection between indoor and outdoor spaces, with excellent visibility and ventilation effects.',
        zh: '100% 完全开启：开启扇可以完全打开，实现室内外空间的无缝连接，视野和通风效果极佳。'
      },
      {
        en: 'Space saving: The window sashes are folded and concentrated above, without occupying indoor or outdoor space.',
        zh: '节省空间：窗扇折叠后集中在上方，不占用室内或室外的空间。'
      },
      {
        en: 'Excellent ventilation: When fully opened, the ventilation area is maximized, suitable for spaces that require good convection.',
        zh: '通风极佳：完全开启时，通风面积最大化，适合需要良好对流的空间'
      }
    ],
    colors: [
      {
        name: { en: 'Metallic Gray', zh: '金属灰' },
        value: '#585858' // Approximation based on image name
      },
      {
        name: { en: 'Metal Coffee', zh: '金属咖啡' },
        value: '#4B3621' // Approximation based on image name
      }
    ]
  },
  {
    id: '65',
    image: '/products/65.jpg',
    name: {
      en: '65 Series Thermal Break Outward Opening Double Door',
      zh: '65 系列断桥外开对开门'
    },
    description: {
      en: 'High-performance 65 series thermal break outward opening double door, featuring thermal break aluminum profiles for superior thermal insulation.',
      zh: '高性能65系列断桥外开对开门，采用断桥铝型材，隔热保温性能优越。'
    },
    parameters: [
      {
        label: { en: 'Profile Configuration', zh: '型材配置' },
        value: { en: '6063-T5 high-precision aluminum profile', zh: '6063-T5 高精级铝型材' }
      },
      {
        label: { en: 'Wall Thickness', zh: '型材壁厚' },
        value: { en: 'National standard 2.0mm thick', zh: '国标 2.0mm 厚' }
      },
      {
        label: { en: 'Sealed Configuration', zh: '密封配置' },
        value: { en: 'Automotive grade EPDM sealant strip', zh: '汽车级三元乙丙密封胶条' }
      },
      {
        label: { en: 'Thermal Break', zh: '隔热条' },
        value: { en: 'PA66+GF25 brand insulation strip', zh: 'PA66+GF25 品牌隔热条' }
      },
      {
        label: { en: 'Glass Configuration', zh: '玻璃配置' },
        value: { en: '5+20A+5mm insulated tempered glass', zh: '5+20A+5mm 中空钢化玻璃' }
      },
      {
        label: { en: 'Hardware System', zh: '五金系统' },
        value: { en: 'Optional first-line domestic and foreign brand one character lock', zh: '可选国内外一线品牌一字锁' }
      },
      {
        label: { en: 'Mesh Material', zh: '纱网材质' },
        value: { en: 'High transparency mesh, ant and insect proof', zh: '高透纱网，防蚊防虫不遮挡视线' }
      },
      {
        label: { en: 'Fixed Glass Pressure Line', zh: '固玻压线' },
        value: { en: 'Exterior small square pressed lines, stylish and beautiful', zh: '外装小方压线，时尚美观' }
      }
    ],
    advantages: [
      {
        en: 'Flush design: The glass fan opens outward and the indoor frame fan is flush.',
        zh: '玻扇外开，室内框扇齐平；'
      },
      {
        en: 'Integrated bending: Xinyi Glass Original Sheet, Hollow Aluminum Strip Integrated Bending Process.',
        zh: '信义玻璃原片，中空铝条一体折弯工艺；'
      },
      {
        en: 'Three-chamber design: The three chamber design of the frame provides superior sound insulation and thermal insulation performance.',
        zh: '边框三腔体设计，隔音，保温隔热性能更优越；'
      },
      {
        en: 'Enhanced strength: The frame/fan adopts corner code injection molding technology to enhance the overall strength and sealing waterproof performance.',
        zh: '框/扇均采用角码注胶工艺，提升整框强度及密封防水性能。'
      },
      {
        en: 'Doubled performance: PA66 glass fiber reinforced nylon insulation strip.',
        zh: 'PA66 玻璃纤维增强尼龙隔热条，性能加倍；'
      }
    ],
    colors: [
      {
        name: { en: 'Metallic Gray', zh: '金属灰' },
        value: '#585858'
      },
      {
        name: { en: 'Metal Coffee', zh: '金属咖啡' },
        value: '#4B3621'
      }
    ]
  },
  {
    id: '75',
    image: '/products/75.jpg',
    name: {
      en: '75-80 Series Thermal Break Folding Door',
      zh: '75-80 系列断桥折叠门'
    },
    description: {
      en: 'Premium 75-80 series thermal break folding door system, offering excellent thermal insulation and versatile opening configurations.',
      zh: '高端75-80系列断桥折叠门系统，提供卓越的隔热性能和灵活的开启配置。'
    },
    parameters: [
      {
        label: { en: 'Profile Configuration', zh: '型材配置' },
        value: { en: '6063-T5 high-precision aluminum profile', zh: '6063-T5 高精级铝型材' }
      },
      {
        label: { en: 'Wall Thickness', zh: '型材壁厚' },
        value: { en: 'Guangqi: 65 x 45mm 2.0mm thick', zh: '光企：65 × 45mm 2.0mm 厚' }
      },
      {
        label: { en: 'Sealed Configuration', zh: '密封配置' },
        value: { en: 'Automotive grade EPDM sealant strip', zh: '汽车级三元乙丙密封胶条' }
      },
      {
        label: { en: 'Glass Configuration', zh: '玻璃配置' },
        value: { en: '5+20A+5mm insulated tempered glass', zh: '5+20A+5mm 中空钢化玻璃' }
      },
      {
        label: { en: 'Hardware System', zh: '五金系统' },
        value: { en: 'Imported brand customized hardware', zh: '进口品牌定制五金' }
      },
      {
        label: { en: 'Lower Rail Accessories', zh: '下轨配件' },
        value: { en: 'Flat rail, barrier flat rail, barrier high rail', zh: '平轨、挡边平轨、挡边高轨' }
      }
    ]
  },
  {
    id: '82',
    image: '/products/82.jpg',
    name: {
      en: '82 Series Broken Bridge Double Internal Windows',
      zh: '82 系列断桥双内开窗'
    },
    description: {
      en: 'High-performance 82 series broken bridge double internal windows with superior sealing, sound insulation, and thermal performance.',
      zh: '高性能82系列断桥双内开窗，具有优异的密封、隔音和隔热性能。'
    },
    parameters: [
      {
        label: { en: 'Profile Configuration', zh: '型材配置' },
        value: { en: '6063-T5 high-precision aluminum profile', zh: '6063-T5 高精级铝型材' }
      },
      {
        label: { en: 'Wall Thickness', zh: '型材壁厚' },
        value: { en: 'National standard 2.0mm thick', zh: '国标 2.0mm 厚' }
      },
      {
        label: { en: 'Sealed Configuration', zh: '密封配置' },
        value: { en: 'Automotive grade EPDM sealant strip', zh: '汽车级三元乙丙密封胶条' }
      },
      {
        label: { en: 'Thermal Break', zh: '隔热条' },
        value: { en: 'PA66+GF25 brand insulation strip', zh: 'PA66+GF25 品牌隔热条' }
      },
      {
        label: { en: 'Glass Configuration', zh: '玻璃配置' },
        value: { en: '5+20A+5mm insulated tempered glass', zh: '5+20A+5mm 中空钢化玻璃' }
      },
      {
        label: { en: 'Hardware System', zh: '五金系统' },
        value: { en: 'Optional first-line domestic and foreign brand one character lock', zh: '可选国内外一线品牌一字锁' }
      },
      {
        label: { en: 'Mesh Material', zh: '纱网材质' },
        value: { en: 'High transparency mesh, ant and insect proof, does not obstruct the line of sight', zh: '高透纱网，防蚊防虫不遮挡视线' }
      },
      {
        label: { en: 'Fixed Glass Pressure Line', zh: '固玻压线' },
        value: { en: 'Exterior small square pressed lines, stylish and beautiful', zh: '外装小方压线，时尚美观' }
      }
    ],
    advantages: [
      {
        en: 'Standard closed square pressure line, indoor and outdoor glue free process, waterproof design',
        zh: '标配闭口方压线，室内外免打胶工艺，防渗水设计'
      },
      {
        en: 'The glass fan can be opened inward or inverted inward, the yarn fan can be opened inward, and the frame fan is level',
        zh: '玻扇开启可以内开、内开内倒，纱扇内开，框扇平齐'
      },
      {
        en: 'Xinyi Glass Original Sheet, Hollow Aluminum Strip Integrated Bending Process',
        zh: '信义玻璃原片，中空铝条一体折弯工艺'
      },
      {
        en: 'Equipped with three layers of sealing duckbill glue as standard to enhance overall sealing performance',
        zh: '标配三道密封鸭嘴胶，提升整体密封性能'
      },
      {
        en: 'The three chamber design of the frame provides superior sound insulation and thermal insulation performance',
        zh: '边框三腔体设计，隔音，保温隔热性能更优越'
      },
      {
        en: 'Floor drain design ensures smooth drainage and prevents rainwater from flowing back',
        zh: '地漏式排水设计，排水顺畅、雨水不倒灌'
      },
      {
        en: 'The frame/fan adopts corner code injection molding technology to enhance the overall strength and sealing waterproof performance of the frame',
        zh: '框/扇均采用角码注胶工艺，提升整框强度及密封防水性能'
      }
    ],
    colors: [
      {
        name: { en: 'Metallic Gray', zh: '金属灰' },
        value: '#585858'
      },
      {
        name: { en: 'Metal Coffee', zh: '金属咖啡' },
        value: '#4B3621'
      }
    ]
  },
  {
    id: '85',
    image: '/products/85.jpg',
    name: {
      en: '85 Series Non-Thermal Break Double Hung Window',
      zh: '85 系列非断桥双提拉窗'
    },
    description: {
      en: 'Versatile 85 series non-thermal break double hung window, allowing flexible ventilation with both sashes movable.',
      zh: '多功能85系列非断桥双提拉窗，双扇可移动，实现灵活通风。'
    },
    parameters: [
      {
        label: { en: 'Profile Configuration', zh: '型材配置' },
        value: { en: '6063-T5 high-precision aluminum profile', zh: '6063-T5 高精级铝型材' }
      },
      {
        label: { en: 'Wall Thickness', zh: '型材壁厚' },
        value: { en: 'National standard 1.4mm thick', zh: '国标 1.4mm 厚' }
      },
      {
        label: { en: 'Sealed Configuration', zh: '密封配置' },
        value: { en: 'Automotive grade EPDM sealant strip', zh: '汽车级三元乙丙密封胶条' }
      },
      {
        label: { en: 'Glass Configuration', zh: '玻璃配置' },
        value: { en: '5+10A+5mm insulated tempered glass', zh: '5+10A+5mm 中空钢化玻璃' }
      },
      {
        label: { en: 'Hardware System', zh: '五金系统' },
        value: { en: 'Optional first-line domestic and foreign brand one character lock', zh: '可选国内外一线品牌一字锁' }
      },
      {
        label: { en: 'Mesh Material', zh: '纱网材质' },
        value: { en: 'High transparency mesh, ant and insect proof, does not obstruct the line of sight', zh: '高透纱网，防蚊防虫不遮挡视线' }
      }
    ],
    advantages: [
      {
        en: 'Both fans are movable: the lower fan can be raised to introduce cool air, while the upper fan can be lowered to expel hot air, utilizing the principle of air convection to achieve efficient natural ventilation.',
        zh: '双扇皆可移动：既可以提升下扇来引入凉爽空气，也可以降下上扇来排出热空气，利用空气对流原理实现高效的自然通风。'
      },
      {
        en: 'Flexible ventilation and safety: By limiting the window opening range, air circulation can be ensured, and the gap between windows is very small, improving children\'s safety and theft prevention.',
        zh: '灵活的通风与安全性：通过限制开窗幅度，这样既能保证空气流通，开窗的缝隙又很小，提高了儿童安全性和防盗性。'
      }
    ],
    colors: [
      {
        name: { en: 'Metallic Gray', zh: '金属灰' },
        value: '#585858'
      },
      {
        name: { en: 'Metal Coffee', zh: '金属咖啡' },
        value: '#4B3621'
      }
    ]
  },
  {
    id: '110',
    image: '/products/110.jpg',
    name: {
      en: '110 Series Broken Bridge Window Screen Integrated External Opening Window',
      zh: '110 系列断桥窗纱一体外开窗'
    },
    description: {
      en: 'Premium 110 series broken bridge window screen integrated external opening window, offering comprehensive protection and superior performance.',
      zh: '高端110系列断桥窗纱一体外开窗，提供全面的防护和卓越的性能。'
    },
    parameters: [
      {
        label: { en: 'Profile Configuration', zh: '型材配置' },
        value: { en: '6063-T5 high-precision aluminum profile', zh: '6063-T5 高精级铝型材' }
      },
      {
        label: { en: 'Wall Thickness', zh: '型材壁厚' },
        value: { en: 'National standard 2.0mm thick', zh: '国标 2.0mm 厚' }
      },
      {
        label: { en: 'Sealed Configuration', zh: '密封配置' },
        value: { en: 'Automotive grade EPDM sealant strip', zh: '汽车级三元乙丙密封胶条' }
      },
      {
        label: { en: 'Thermal Break', zh: '隔热条' },
        value: { en: 'PA66+GF25 brand insulation strip', zh: 'PA66+GF25 品牌隔热条' }
      },
      {
        label: { en: 'Glass Configuration', zh: '玻璃配置' },
        value: { en: '5+20A+5mm insulated tempered glass', zh: '5+20A+5mm 中空钢化玻璃' }
      },
      {
        label: { en: 'Hardware System', zh: '五金系统' },
        value: { en: 'Optional first-line domestic and foreign brand one character lock', zh: '可选国内外一线品牌一字锁' }
      },
      {
        label: { en: 'Mesh Material', zh: '纱网材质' },
        value: { en: 'High transparency mesh, ant and insect proof, does not obstruct the line of sight', zh: '高透纱网，防蚊防虫不遮挡视线' }
      },
      {
        label: { en: 'Fixed Glass Pressure Line', zh: '固玻压线' },
        value: { en: 'Exterior small square pressed lines, stylish and beautiful', zh: '外装小方压线，时尚美观' }
      }
    ],
    advantages: [
      {
        en: 'The glass fan can be opened inward or inward, and the yarn fan can be opened outward',
        zh: '玻扇开启可以内开、内开内倒，纱扇外开'
      },
      {
        en: 'Xinyi Glass Original Sheet, Hollow Aluminum Strip Integrated Bending Process',
        zh: '信义玻璃原片，中空铝条一体折弯工艺'
      },
      {
        en: 'The four chamber design of the frame provides superior sound insulation and thermal insulation performance',
        zh: '边框四腔体设计，隔音，保温隔热性能更优越'
      },
      {
        en: 'Floor drain design ensures smooth drainage and prevents rainwater from flowing back',
        zh: '地漏式排水设计，排水顺畅、雨水不倒灌'
      },
      {
        en: 'The frame/fan adopts corner code injection molding technology to enhance the overall strength and sealing waterproof performance of the frame',
        zh: '框/扇均采用角码注胶工艺，提升整框强度及密封防水性能'
      },
      {
        en: 'The window comes standard with anti fall chains and round stainless steel corner protectors',
        zh: '窗体标配防坠链，配置圆型不锈钢护角'
      },
      {
        en: 'PA66 glass fiber reinforced nylon insulation strip, with doubled performance',
        zh: 'PA66 玻璃纤维增强尼龙隔热条，性能加倍'
      }
    ],
    colors: [
      {
        name: { en: 'Metallic Gray', zh: '金属灰' },
        value: '#585858'
      },
      {
        name: { en: 'Metal Coffee', zh: '金属咖啡' },
        value: '#4B3621'
      }
    ]
  },
  {
    id: '120',
    image: '/products/120.jpg',
    name: {
      en: '120 Three Track Broken Bridge Sliding Window',
      zh: '120 三轨断桥推拉窗'
    },
    description: {
      en: 'Premium 120 three track broken bridge sliding window, featuring high-quality aluminum profiles and advanced thermal insulation technology.',
      zh: '高端120三轨断桥推拉窗，采用高品质铝型材和先进的隔热技术。'
    },
    parameters: [
      {
        label: { en: 'Profile Configuration', zh: '型材配置' },
        value: { en: '6063-T5 high-precision aluminum profile', zh: '6063-T5 高精级铝型材' }
      },
      {
        label: { en: 'Wall Thickness', zh: '型材壁厚' },
        value: { en: 'National standard 2.0mm thick', zh: '国标 2.0mm 厚' }
      },
      {
        label: { en: 'Sealed Configuration', zh: '密封配置' },
        value: { en: 'Automotive grade EPDM sealant strip', zh: '汽车级三元乙丙密封胶条' }
      },
      {
        label: { en: 'Glass Configuration', zh: '玻璃配置' },
        value: { en: '5+20A+5mm insulated tempered glass', zh: '5+20A+5mm 中空钢化玻璃' }
      },
      {
        label: { en: 'Hardware System', zh: '五金系统' },
        value: { en: 'Optional first-line domestic and foreign brand one character lock', zh: '可选国内外一线品牌一字锁' }
      },
      {
        label: { en: 'Mesh Material', zh: '纱网材质' },
        value: { en: 'High transparency mesh, ant and insect proof, does not obstruct the line of sight', zh: '高透纱网，防蚊防虫不遮挡视线' }
      },
      {
        label: { en: 'Fixed Glass Pressure Line', zh: '固玻压线' },
        value: { en: 'Exterior large beveled pressed lines, stylish and beautiful', zh: '大斜边压线，时尚美观' }
      }
    ],
    advantages: [
      {
        en: 'High bottom rail anti backflow and drainage design ensures smoother drainage',
        zh: '高底轨防倒灌排水设计，排水更顺畅'
      },
      {
        en: 'Adopting embedded design, higher transparency and more transparent field of view',
        zh: '采用嵌入式设计，更高透光性视野更通透'
      },
      {
        en: 'Track 3.0 provides better load-bearing capacity, sturdiness, and safety',
        zh: '轨道 3.0 更好承重更固更安全'
      },
      {
        en: 'Equipped with high-strength 304 stainless steel three track, smooth and quiet push-pull operation',
        zh: '配置高强度 304 不锈钢三轨道，推拉顺滑静音'
      },
      {
        en: 'Using branded stainless steel silent pulleys for smoother pushing and pulling',
        zh: '采用品牌不锈钢静音滑轮，推拉更顺畅'
      },
      {
        en: 'The design of the upper anti balance wheel and lower wheel makes the window more stable and smooth',
        zh: '上防摆轮和下轮的设计，使窗户更加稳定顺滑'
      },
      {
        en: 'The glass fan is designed with a width of 65mm, reducing the obstruction of the field of view caused by the glass fan',
        zh: '玻璃扇 65mm 宽设计，减少了玻璃对视野的遮挡'
      }
    ],
    colors: [
      {
        name: { en: 'Metallic Gray', zh: '金属灰' },
        value: '#585858'
      },
      {
        name: { en: 'Metal Coffee', zh: '金属咖啡' },
        value: '#4B3621'
      }
    ]
  },
  {
    id: '150',
    image: '/products/150.jpg',
    name: {
      en: '150 Series Two Track Two Leaf Sliding Door',
      zh: '150 系列两轨两扇推拉门'
    },
    description: {
      en: 'High-quality 150 series two track two leaf sliding door system, featuring durable construction and smooth operation.',
      zh: '高品质150系列两轨两扇推拉门系统，结构坚固，运行平稳。'
    },
    parameters: [
      {
        label: { en: 'Profile Configuration', zh: '型材配置' },
        value: { en: '6063-T5 high-precision aluminum profile', zh: '6063-T5 高精级铝型材' }
      },
      {
        label: { en: 'Wall Thickness', zh: '型材壁厚' },
        value: { en: 'Guangqi: 88mm, 2.0mm thick', zh: '光企：88mm, 2.0mm 厚' }
      },
      {
        label: { en: 'Sealed Configuration', zh: '密封配置' },
        value: { en: 'Automotive grade EPDM sealant strip', zh: '汽车级三元乙丙密封胶条' }
      },
      {
        label: { en: 'Glass Configuration', zh: '玻璃配置' },
        value: { en: '5+20A+5mm insulated tempered glass', zh: '5+20A+5mm 中空钢化玻璃' }
      },
      {
        label: { en: 'Hardware System', zh: '五金系统' },
        value: { en: 'Imported brand customized hardware', zh: '进口品牌定制五金' }
      },
      {
        label: { en: 'Lower Rail Accessories', zh: '下轨配件' },
        value: { en: 'Flat rail, barrier flat rail, barrier high rail', zh: '平轨、挡边平轨、挡边高轨' }
      }
    ],

  },
  {
    id: '225',
    image: '/products/225.jpg',
    name: {
      en: '225 Series Three Track Three Leaf Sliding Door',
      zh: '225 系列三轨三扇推拉门'
    },
    description: {
      en: 'Premium 225 series three track three leaf sliding door, designed for wider openings with enhanced stability and performance.',
      zh: '高端225系列三轨三扇推拉门，专为更宽开口设计，具有增强的稳定性和性能。'
    },
    parameters: [
      {
        label: { en: 'Profile Configuration', zh: '型材配置' },
        value: { en: '6063-T5 high-precision aluminum profile', zh: '6063-T5 高精级铝型材' }
      },
      {
        label: { en: 'Wall Thickness', zh: '型材壁厚' },
        value: { en: 'Guangqi: 88mm, 2.0mm thick', zh: '光企：88mm, 2.0mm 厚' }
      },
      {
        label: { en: 'Sealed Configuration', zh: '密封配置' },
        value: { en: 'Automotive grade EPDM sealant strip', zh: '汽车级三元乙丙密封胶条' }
      },
      {
        label: { en: 'Glass Configuration', zh: '玻璃配置' },
        value: { en: '5+15A+5mm insulated tempered glass', zh: '5+15A+5mm 中空钢化玻璃' }
      },
      {
        label: { en: 'Hardware System', zh: '五金系统' },
        value: { en: 'Imported brand customized hardware', zh: '进口品牌定制五金' }
      },
      {
        label: { en: 'Lower Rail Accessories', zh: '下轨配件' },
        value: { en: 'Edge flat rail', zh: '挡边平轨' }
      }
    ],

  },
  {
    id: '130',
    image: '/products/130.jpg',
    name: {
      en: '130 Six Track Panoramic Sliding Window',
      zh: '130 六轨全景推拉窗'
    },
    description: {
      en: 'Luxury 130 series six track panoramic sliding window, offering an expansive view and superior performance.',
      zh: '豪华130系列六轨全景推拉窗，提供广阔的视野和卓越的性能。'
    },
    parameters: [
      {
        label: { en: 'Profile Configuration', zh: '型材配置' },
        value: { en: '6063-T5 high-precision aluminum profile', zh: '6063-T5 高精级铝型材' }
      },
      {
        label: { en: 'Wall Thickness', zh: '型材壁厚' },
        value: { en: 'Guangqi: 32mm, 2.0mm thick', zh: '光企：32mm, 2.0mm 厚' }
      },
      {
        label: { en: 'Sealed Configuration', zh: '密封配置' },
        value: { en: 'Jiangyin Haida EPDM sealing strip', zh: '江阴海达三元乙丙密封胶条' }
      },
      {
        label: { en: 'Glass Configuration', zh: '玻璃配置' },
        value: { en: '5+16A+5mm insulated tempered glass', zh: '5+16A+5mm 中空钢化玻璃' }
      },
      {
        label: { en: 'Hardware System', zh: '五金系统' },
        value: { en: 'Opak high-temperature resistant silent wheel, Oss side lock', zh: '欧派克耐高温静音轮，奥斯侧面锁' }
      },
      {
        label: { en: 'Mesh Configuration', zh: '纱网配置' },
        value: { en: 'Standard 045 high-definition mesh', zh: '标配 045 高清纱网' }
      }
    ],
    colors: [
      {
        name: { en: 'Metallic Gray', zh: '金属灰' },
        value: '#585858'
      },
      {
        name: { en: 'Metal Coffee', zh: '金属咖啡' },
        value: '#4B3621'
      }
    ]
  },
  {
    id: '4065',
    image: '/products/4065.jpg',
    name: {
      en: '40*65 Three Track Sliding Door Series',
      zh: '40*65 三轨推拉门系列'
    },
    description: {
      en: 'Modern 40*65 three track sliding door series, featuring a sleek design and high-performance components.',
      zh: '现代40*65三轨推拉门系列，设计时尚，组件性能优越。'
    },
    parameters: [
      {
        label: { en: 'Profile Configuration', zh: '型材配置' },
        value: { en: '6063-T5 high-precision aluminum profile', zh: '6063-T5 高精级铝型材' }
      },
      {
        label: { en: 'Wall Thickness', zh: '型材壁厚' },
        value: { en: 'Guangqi: 65mm, 2.0mm thick', zh: '光企：65mm 2.0mm 厚' }
      },
      {
        label: { en: 'Sealed Configuration', zh: '密封配置' },
        value: { en: 'Automotive grade EPDM sealant strip', zh: '汽车级三元乙丙密封胶条' }
      },
      {
        label: { en: 'Glass Configuration', zh: '玻璃配置' },
        value: { en: '5+20A+5mm insulated tempered glass', zh: '5+20A+5mm 中空钢化玻璃' }
      },
      {
        label: { en: 'Hardware System', zh: '五金系统' },
        value: { en: 'Imported brand customized hardware', zh: '宝高五金' }
      },
      {
        label: { en: 'Mesh Configuration', zh: '纱网配置' },
        value: { en: 'Standard high-definition mesh', zh: '标配高清纱网' }
      }
    ],
    colors: [
      {
        name: { en: 'Metallic Gray', zh: '金属灰' },
        value: '#585858'
      },
      {
        name: { en: 'Metal Coffee', zh: '金属咖啡' },
        value: '#4B3621'
      }
    ]
  },
  {
    id: 'sd',
    image: '/products/sd.jpg',
    name: {
      en: 'Panoramic Heavy-Duty Sliding Door Series',
      zh: '全景重型推拉门系列'
    },
    description: {
      en: 'Premium Panoramic Heavy-Duty Sliding Door Series, designed for expansive views and robust performance.',
      zh: '高端全景重型推拉门系列，专为广阔视野和强劲性能设计。'
    },
    parameters: [
      {
        label: { en: 'Profile Configuration', zh: '型材配置' },
        value: { en: '6063-T5 high-precision aluminum profile', zh: '6063-T5 高精级铝型材' }
      },
      {
        label: { en: 'Wall Thickness', zh: '型材壁厚' },
        value: { en: '2.0/3.0/7.0mm thick', zh: '2.0/3.0/7.0mm 厚' }
      },
      {
        label: { en: 'Sealed Configuration', zh: '密封配置' },
        value: { en: 'Automotive grade EPDM sealant strip', zh: '汽车级三元乙丙密封胶条' }
      },
      {
        label: { en: 'Glass Configuration', zh: '玻璃配置' },
        value: { en: '6+22A+6mm insulated tempered glass', zh: '6+22A+6mm 中空钢化玻璃' }
      },
      {
        label: { en: 'Hardware System', zh: '五金系统' },
        value: { en: 'Imported brand customized hardware', zh: '进口品牌定制五金' }
      },
      {
        label: { en: 'Lower Rail Accessories', zh: '下轨配件' },
        value: { en: 'Flat rail, barrier flat rail, barrier high rail', zh: '平轨、挡边平轨、挡边高轨' }
      }
    ],
    advantages: [
      {
        en: '7.0mm hooked wall thickness: Ensures superior strength and durability.',
        zh: '7.0mm 勾企壁厚：确保卓越的强度和耐用性。'
      },
      {
        en: 'Double break bridge design: Enhanced thermal insulation performance.',
        zh: '双断桥设计：增强隔热保温性能。'
      }
    ],
    colors: [
      {
        name: { en: 'Obsidian Black', zh: '曜岩黑' },
        value: '#1a1a1a'
      },
      {
        name: { en: 'Dark Brown', zh: '氟碳深咖' },
        value: '#4a3c31'
      },
      {
        name: { en: 'Brushed Silver', zh: '瓷泳拉丝银' },
        value: '#c0c0c0'
      },
      {
        name: { en: 'Silver Ash', zh: '银灰' },
        value: '#808080'
      }
    ]
  }
];
