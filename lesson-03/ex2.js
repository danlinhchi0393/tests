const height = 200;

let idealWeight;
let maxWeight;
let minWeight;

if (height >100 && height < 200) {
    idealWeight = (height - 100) * 9 /10;
    maxWeight = height - 100;
    minWeight = (height - 100) * 8 /10;
    console.log(`Ideal weight: ${idealWeight}, Max weight: ${maxWeight}, Min weight: ${minWeight}`);
}
else {
    console.log('Không có công thức phù hợp với chiều cao trên');
}