function Bhaskara(a,b,c){
    let delta = (b*b) + ((-4)*a*(c));
        function roots(){
            let root1 = -(b) + Math.sqrt(delta);
            root1 = root1/(2*a)
            let root2 = -(b) - Math.sqrt(delta);
            root2 = root2/(2*a)
            return `Roots: x = ${Math.round(root1)}, y = ${Math.round(root2)}`;
        }
        return console.log(`Fórmula de Bhaskara:
Δ = ${delta}
${roots()}`);

}

Bhaskara(1,4,-12);
