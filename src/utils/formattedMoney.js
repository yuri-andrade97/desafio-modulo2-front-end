function formattedMoney(price) {
    const preco = price.toFixed(1);
    const formatted = preco.replace(".", ",");
    

    return formatted;
}

export default formattedMoney;