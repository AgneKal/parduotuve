class SkaiciuokleController{
    static apskaiciuoti(req: any, res:any) {
        console.log('Skaičiuojami rezultatai');
        res.json({
            "rezultatas": 5
        })
    }
}

export {SkaiciuokleController}