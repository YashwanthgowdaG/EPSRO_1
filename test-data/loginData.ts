
export const loginData = [
    {
        testName: 'Valid ERP Login',
        username: process.env.ERP_USERNAME!,
        password: process.env.ERP_PASSWORD!,
        expectedResult: 'success'
    },
    {
        testName: 'Invalid Password',
        username: process.env.ERP_USERNAME!,
        password: 'wrong-password',
    },

    {
        testName: 'Empty Password',
        username: process.env.ERP_USERNAME!,
        password: '',
    },
];
