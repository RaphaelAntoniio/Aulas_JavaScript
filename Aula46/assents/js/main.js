function rescursiva(max){
    if (max > Infinity)return;
    max++;
    console.log(max)
    rescursiva(max);
}
rescursiva(1)