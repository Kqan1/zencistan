export function formatPrice(balance: number): string | number {
    if (balance !== undefined) {
        const balanceStr = balance.toString();
        let [integerPart, decimalPart] = balanceStr.split('.');

        integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

        if (decimalPart && decimalPart.length === 1) decimalPart += '0';

        const formattedBalance = decimalPart ? `${integerPart},${decimalPart}` : integerPart;
        console.log(formattedBalance);
        return formattedBalance;
    };
    return 0;
};