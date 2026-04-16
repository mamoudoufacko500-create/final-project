import { useState, useEffect } from "react";

export default function CreatePage() {

  const [nom, setNom] = useState('')
  const [couleur, setCouleur] = useState('')
  const [taille, setTaille] = useState('')
  const [sexe, setSexe] = useState('')
  const [image, setImage] = useState(null)

  //  Charger depuis localStorage
  const [produits, setProduits] = useState(() => {
    const saved = localStorage.getItem("produits")
    return saved ? JSON.parse(saved) : []
  })

  //  Sauvegarder automatiquement
  useEffect(() => {
    localStorage.setItem("produits", JSON.stringify(produits))
  }, [produits])

  //  Ajouter produit
  const handleSubmit = (e:any) => {
    e.preventDefault()

    if (!nom || !couleur || !taille || !sexe) {
      alert("Remplir tous les champs")
      return
    }

    const nouveauProduit = {
      id: Date.now(),
      nom,
      couleur,
      taille,
      sexe,
      image: image ? URL.createObjectURL(image) : null
    }

    setProduits([...produits, nouveauProduit])

    //  réinitialiser
    setNom('')
    setCouleur('')
    setTaille('')
    setSexe('')
    setImage(null)
  }

  return (
    <div className="max-w-4xl mx-auto p-20 flex justify-center items-center">
      
      <form 
        onSubmit={handleSubmit} 
        className="grid grid-cols-2 gap-4 mb-8"
      >
        
        <input
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          placeholder="Couleur"
          value={couleur}
          onChange={(e) => setCouleur(e.target.value)}
          className="border p-2 rounded"
        />

        <select
          className="border p-2 rounded"
          value={taille}
          onChange={(e) => setTaille(e.target.value)}
        >
          <option value="">Taille</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </select>

        <select
          className="border p-2 rounded"
          value={sexe}
          onChange={(e) => setSexe(e.target.value)}
        >
          <option value="">Sexe</option>
          <option>Homme</option>
          <option>Femme</option>
          <option>Unisexe</option>
        </select>

        <input 
          type="file" 
          className="col-span-2" 
          onChange={(e) => setImage(e.target.files[0])} 
        />

        <button 
          type="submit"
          className="col-span-2 bg-black text-white p-2 rounded"
        >
          Ajouter
        </button>

      </form>

    </div>
  );
}
