import { useState, useEffect } from "react"
import { toast } from "sonner"

export default function ProduitPage() {

  //  Champs formulaire (IMPORTANT)
  const [nom, setNom] = useState('')
  const [couleur, setCouleur] = useState('')
  const [taille, setTaille] = useState('')
  const [sexe, setSexe] = useState('')
  const [image, setImage] = useState(null)

  const [editId, setEditId] = useState(null)

  //  Charger depuis localStorage
  const [produits, setProduits] = useState(() => {
    const saved = localStorage.getItem("produits")
    return saved ? JSON.parse(saved) : []
  })

  //  Sauvegarder automatiquement
  useEffect(() => {
    localStorage.setItem("produits", JSON.stringify(produits))
  }, [produits])

  //  Supprimer
  const handleDelete = (id:any) => {
  
      const updatedProduits = produits.filter((p:any) => p.id !== id)
      setProduits(updatedProduits);
       toast.success("produit supprimer");
   
  }

  //  Modifier (remplir formulaire)
  const handleEdit = (produit:any) => {
    setNom(produit.nom)
    setCouleur(produit.couleur)
    setTaille(produit.taille)
    setSexe(produit.sexe)
    setImage(null)
    setEditId(produit.id)
  }

  return (
    <div className="max-w-6xl mx-auto p-20 flex justify-center items-center">
      <table className="w-full border-4">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Couleur</th>
            <th>Taille</th>
            <th>Sexe</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {produits.map((p:any) => (
            <tr key={p.id} className="text-center border py-5">
              <td>{p.nom}</td>
              <td>{p.couleur}</td>
              <td>{p.taille}</td>
              <td>{p.sexe}</td>

              <td>
                {p.image && (
                  <img src={p.image} alt="" className="w-12 mx-auto" />
                )}
              </td>

              <td className="space-x-2 ">
                <button
                  onClick={() => handleEdit(p)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Modifier
                </button>

                <button
                  onClick={() => handleDelete(p.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
