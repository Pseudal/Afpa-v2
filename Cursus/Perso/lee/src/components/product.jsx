const Products = (props)=>{
    const {produits}=props;
    return(
        <>
        {produits.map((produit,index)=>{
            return(
                <div className="col-3 card">
                    <img src={produit.image} alt="..."/>
                    <div className="card-body">
                        <h1>{produit.name}</h1>
                        <article>
                            <p className="card-text">Référence: {produit.reference}</p>
                            <p className="card-text">Prix: {produit.price}</p>
                            <p className="card-text">Disponible: {(produit.available='true')?'Oui':'Non'}</p>
                        </article>
                    </div>
                </div>
            )
        })}
        </>
    );
}

export default Products;