const computeAverageOfNumbers = arr => {
    let promedio = 0;
    arr.map(n => promedio = promedio + n);
    promedio = promedio / arr.length;
    return promedio;
}