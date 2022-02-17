// 76 раздел Многомерные массивы и объекты в JavaScript



let employees = [
    {
        name: 'name1',
        salary: 300,
    },
    {
        name: 'name2',
        salary: 400,
    },
    {
        name: 'name3',
        salary: 500,
    },
];



console.log(employees[0].salary);
console.log(employees[1].salary);







let students = {
    'boys': ['Коля', 'Вася', 'Петя'],
    'girls': ['Даша', 'Маша', 'Лена'],
};

console.log(students['boys'][1]);
console.log(students['girls'][2]);




77 раздел Перебор многомерных комбинаций в JavaScript






let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];

// for (let user of employees) {
//     document.write(user.name + ' ' + user.salary + '<br>');

// }

for (let sum of employees) {
    console.log(sum.salary)
} // сумма зарплат всех работников





let employees = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];

for (let sum of employees) {
if (sum.age >= 30) {
        console.log(sum.salary)
}
}








let employees = [
	{
		name: 'name1',
		salary: 300,
		dismissed: false,
	},
	{
		name: 'name2',
		salary: 400,
		dismissed: true,
	},
	{
		name: 'name3',
		salary: 500,
		dismissed: false,
	},
	{
		name: 'name4',
		salary: 600,
		dismissed: true,
	},
	{
		name: 'name5',
		salary: 700,
		dismissed: false,
	},
];

for (let sum of employees) {
    if (sum.dismissed == false) {
        console.log(sum.salary)
    }
}








let data = {
	1: [
		'data11',
		'data12',
		'data13',
	],
	2: [
		'data21',
		'data22',
		'data23',
	],
	3: [
		'data31',
		'data32',
		'data33',
		'data34',
		'data35',
	],
	4: [
		'data41',
		'data42',
	],
};

for (let str in data) {
  //  console.log(str);

    for (let result of data[str]) {
        console.log(result)
    }
}













let data = [
	{
		1: 'data11',
		2: 'data12',
		3: 'data13',
		4: 'data14',
	},
	{
		1: 'data21',
		2: 'data22',
		3: 'data33',
	},
	{
		1: 'data31',
		2: 'data32',
	},
];


for (let result of data) {
    for(let name in result) {
    //    console.log(name);
    //     console.log(result[name])
    document.write(name + ':' + ' '  + result[name] + '<br>'  );
    }
}












let data = [
	{
		1: [
			'data111',
			'data112',
			'data113',
		],
		2: [
			'data121',
			'data122',
			'data123',
		],
	},
	{
		1: [
			'data211',
			'data212',
			'data213',
		],
		2: [
			'data221',
			'data222',
			'data223',
			'data224',
		],
		3: [
			'data231',
			'data232',
			'data233',
			'data234',
			'data235',
		],
	},
	{
		1: [
			'data411',
			'data412',
			'data413',
		],
		2: [
			'data421',
		],
	},
];

for (let name of data) {
    document.write()
    for(let name1 in name) {
        for (let name3 of name[name1]) {
            document.write(name1 + ':' + ' ' + name3 + '<br>')
            console.log(name1 + name3)
        }
    }
   
}