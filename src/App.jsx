import{ useState } from "react";

const processes = `
I. PROCESS 1 : NETTOYAGE ET TRIAGE CAFE

A. Problèmes générés :
1. Présence d’impuretés
2. Grains cassés ou abîmés
3. Mélange de taille de grains
4. Pertes excessive de grains avec déchets
5. Présence de corps étrangers métalliques
6. Problèmes d’hygiène (moisissures, odeurs)
7. Blocage des machines

B. Causes principales :
1.
  - Mauvaise réglage des machines de nettoyage
  - Humidité trop élevée collant les impuretés aux grains
  - Mauvais tamisage ou aspiration
2.
  - Vitesse trop élevée des convoyeurs
  - Humidité inadaptée (grains fragiles)
  - Réglage trop serré des machines de nettoyage
3.
  - Problème de tamisage par calibre
  - Tamis mal ajustés
4.
  - Mauvais calibrage du flux d’air
  - Réglages des tamis inadaptés à la densité des grains
5.
  - Dysfonctionnement de détecteurs
  - La convoyeur ou la trémie peut être rouillé
6.
  - Café stocké humide avant triage
  - Nettoyage insuffisant des machines
7.
  - Présences de matières humides et visqueuses
  - Trop grande quantité de café entré

C. Suggestions d’améliorations :
1.
  - Installer un séparateur magnétique + trieur densimétrique
  - Assurer bien la qualité initiale de la matière
  - Contrôler régulièrement le tamis et l’aspiration
2.
  - Vérifier régulièrement la vitesse et pression des machines
  - Maintenir l’humidité idéale (10-12%) avant nettoyage
3.
  - Utiliser des tamis de différentes mailles calibrées
  - Vérifier l’usure des grilles à la fois
4.
  - Mettre en place un système de récupération des pertes
  - Ajuster les tamis selon la densité des grains
5.
  - Vérifier les détecteurs de métaux s’ils fonctionnent bien
  - Nettoyer régulièrement la convoyeur et la trémie
6.
  - Contrôler bien le café avant nettoyage
  - Mettre en place un plan de nettoyage quotidien
7.
  - Effectuer une maintenance préventive régulière
  - Réguler le débit d’alimentation

II. PROCESS 2 : TORREFACTION

A. Problèmes générés :
1. Perte de poids trop élevée (supérieure de 20%)
2. Café brûlé (goût ou arôme non conforme)
3. Pertes de temps
4. Consommation énergétique élevée
5. Grains cassés après torréfaction
6. Pannes fréquentes des torréfacteurs
7. Risques incendies

B. Causes principales :
1.
  - Humidité initiale du café mal ajustée
  - Temps de torréfaction trop long
2.
  - Température mal contrôlée
  - Incohérence entre lot de café vert
  - Courbes mal définies selon l’origine du café
3.
  - Préparation lente des lots
  - Temps de refroidissement trop long
  - Mauvaise planification de la production
4.
  - Pertes thermiques importantes
  - Mauvais réglages de brûleurs
  - Vieilles machines peu isolées
5.
  - Temps de refroidissement mal géré
  - Café vert de mauvaise qualité
6.
  - Mauvaise maintenance préventive
  - Pièces usées
7.
  - Accumulation des pellicules de grains dans le tambour
  - Mauvaise ventilation des fumées
  - Température excessive

C. Suggestions d’améliorations :
1.
  - Contrôler l’humidité du café vert avant torréfaction
  - Standardiser les courbes de torréfaction
2.
  - Automatiser le contrôle (capteurs + logiciels)
  - Mettre en place le profil de torréfaction adaptés par origine du café
3.
  - Réduire les temps morts avec SMED (changement rapide de série)
  - Utiliser refroidisseurs plus efficaces (air + eau contrôlée)
  - Planifier la production selon la capacité réelle des machines
4.
  - Isoler thermiquement les tambours
  - Entretenir les brûleurs
  - Installer récupérateurs de chaleur pour préchauffer l’air entrant
5.
  - Utiliser refroidissement progressif et contrôlé
  - Sélectionner café vert homogène
6.
  - Mettre en place plan de maintenance préventive
  - Stocker pièces de rechange critiques
7.
  - Nettoyer régulièrement le collecteur de Chaff
  - Former le personnel aux procédures d’urgence

III. PROCESS 3 : BROYAGE

A. Problèmes générés :
1. Mouture non homogène
2. Surchauffe du moulin
3. Bourrage de la machine
4. Bruit et vibrations excessifs
5. Pertes de produit

B. Causes principales :
1.
  - Différence d’humidité des grains
  - Réglage incorrect des meules et de la finesse
2.
  - Vitesse trop élevée
  - Long temps de fonctionnement continu
  - Ventilation insuffisante
3.
  - Excès d’huile dans certains cafés
  - Grains mal torréfiés (trop gras ou humides)
  - Introduction de corps étrangers
4.
  - Déséquilibre mécanique
  - Fixation instable
5.
  - Mauvaise étanchéité de la machine
  - Aspiration inefficace
  - Usure des joints

C. Suggestions d’améliorations :
1.
  - Installer un système de contrôle automatique de la granulométrie
  - Mettre en place un plan de maintenance préventive
2.
  - Ajuster la vitesse selon le type de café
  - Alterner les machines pour réduire les cycles
  - Ajouter un système de refroidissement
3.
  - Mettre en place un triage magnétique avant broyage
  - Nettoyage quotidien des trémies et conduits
  - Contrôle rigoureux de l’humidité (< 12%)
4.
  - Contrôler l’alignement et l’équilibrage
  - Programme de graissage régulier
  - Installer des amortisseurs de vibration
5.
  - Améliorer le système d’aspiration
  - Changer régulièrement les joints et les garnitures

IV. PROCESS 4 : CONDITIONNEMENT

A. Problèmes générés :
1. Pertes de café (fuites, débordement, poussière)
2. Pannes fréquentes
3. Arrêts imprévus pour réglages
4. Mauvaises fermeture des sachets
5. Déchirures des sacs / sachets
6. Emballage non conforme
7. Faible productivité des opérateurs
8. Perte de temps lors des changements de format
9. Mauvais stockage des produits finis
10. Retards dans l’approvisionnement en emballages
11. Produits non conformes
12. Attente café

B. Causes principales :
1.
  - Mauvais réglage des doseuses
  - Sacs mal formés
  - Défauts d’emballage
2.
  - Manque de maintenance préventive
  - Pièces d’usure non remplacées à temps
3.
  - La complexité de machine
  - Absence de standards de réglages rapides
  - Différence compétence entre les techniciens
4.
  - Film de mauvaise qualité
  - Température de soudure instable
  - Capteurs peut être sales à la fois
5.
  - Qualité médiocre du film
  - Mauvaise tension des bobines
  - Défauts de la machine à coudre
6.
  - Stockage inadéquat
  - Non-conformité depuis chez les fournisseurs
7.
  - Fatigue du personnel
  - Manque de motivation
8.
  - Formation insuffisante
  - Manque de standardisation
9.
  - Intrusion des rats dans l’entrepôt
  - Mauvaise emplacement dans le magasin PF
10.
  - Mauvaise planification
  - Rupture de stocks
11.
  - Opérateurs non vigilants
  - Erreur humaine
12.
  - Manque de synchronisation des flux
  - Mal organisation entre les ingénieurs café

C. Suggestions d’améliorations :
1.
  - Calibration régulière des doseuses
  - Contrôle qualité continu
  - Maintenance préventive
2.
  - Plan de maintenance préventive
  - Mise en place de TPM (Total Productive Maintenance)
3.
  - Méthode SMED pour réduire les temps de changement
  - Check-list standard de réglage
4.
  - Contrôle des films
  - Suivi de la température avec alarmes
  - Nettoyage régulier
5.
  - Renforcer le contrôle qualité à la réception
  - Ajustement de la tension des rouleaux
  - Achat de la nouvelle machine à coudre
6.
  - Audit fournisseurs
  - Améliorer l’emplacement de la matière
7.
  - Programme Kaizen de motivation
  - Faire la rotation du personnel
8.
  - Continuer de former l’opérateur plusieurs fois
  - Standardisation des réglages (SMED)
9.
  - Faire le plan de dératisation
  - Former les opérateurs magasiniers
10.
  - Planification MRP
  - Contrat avec plusieurs fournisseurs
11.
  - Contrôle statistique SPC
  - Mise en place de Poka-Yoke (détection automatique d’erreur)
12.
  - VSM (Value Stream Mapping) pour équilibrer les flux
  - Réorganiser le plan de travail de l’ingénieur café
`;

export default function App() {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(true)
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)

  const callGemini = async () => {
  if (!search) return

  setLoading(true)
  try {
    const res = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAThDMUXKEtr63S3B1Ch0ZSHIBruLXZFJg",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `
Tu es un assistant expert en process industriels du café. 
Voici la base de données des process et problèmes :

${processes}

L'utilisateur va entrer un problème ou une cause. 
Ta mission : trouver le process, le problème, les causes et suggestions correspondantes pas forcement dans les donnees que je t'ai donné dans le format JSON suivant :

{
  "title": "Nom du process",
  "problems": ["..."],
  "causes": [["..."], ["..."]],
  "suggestions": [["..."], ["..."]]
}

⚠️ Important :
- Si l’input de l’utilisateur n’existe pas exactement, tu dois quand même répondre avec tes connaissance  MAIS toujours en respectant ce format JSON.
- Ne jamais inventer un autre domaine, rester uniquement sur les process de café.
- Réponds uniquement avec le JSON valide.

Input utilisateur : ${search}
`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await res.json()
    console.log("Gemini brut:", data)

    let text = data.candidates?.[0]?.content?.parts?.[0]?.text || ""

    text = text.replace(/```json\n?/, "").replace(/```$/, "").trim()


    let parsed = {}
    try {
      parsed = JSON.parse(text)
    } catch (err) {
      console.error("Erreur parsing JSON :", err)
    }
    setResponse(parsed)
  } catch (err) {
    console.error(err)
    setResponse(null)
  }
  setLoading(false)
};


  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-green-900 to-gray-800 text-gray-100"
          : "bg-gradient-to-br from-green-50 via-emerald-100 to-lime-50 text-gray-800"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold">Recherche Process Café</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-4 py-2 rounded-xl font-semibold shadow-md transition 
                      ${darkMode?'bg-gray-800 text-white':'bg-white/80 text-gray-800'}
                     hover:scale-105`}
        >
          {darkMode ? "☀️ Mode Clair" : "🌙 Mode Sombre"}
        </button>
      </div>

      {/* Recherche */}
      <div className="max-w-xl mx-auto mb-6 px-4 flex gap-2">
        <input
          type="text"
          placeholder="Ex: grains cassés, surchauffe du moulin..."
          className={`flex-1 p-3 rounded-xl border border-gray-300 shadow-sm   focus:ring-2 focus:ring-green-500 outline-none ${darkMode?'bg-gray-800':'bg-white'} dark:border-gray-600 dark:placeholder-gray-400`}
                    
                   
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={callGemini}
          disabled={loading}
          className="px-4 py-2 rounded-xl font-semibold shadow-md 
                     bg-green-600 text-white hover:bg-green-700 transition 
                     disabled:opacity-50"
        >
          {loading ? "Analyse IA..." : "Rechercher"}
        </button>
      </div>

      {/* Résultats */}
      {response ? (
        <div className="max-w-3xl mx-auto space-y-6 px-4 pb-10">
          <div
            className={`shadow rounded-2xl p-6 transition ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h2 className="text-xl font-semibold mb-4">{response.title}</h2>

            <Accordion title="A. Problèmes générés" darkMode={darkMode}>
              <ul className="list-disc pl-6 space-y-1">
                {response.problems?.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </Accordion>

            <Accordion title="B. Causes principales" darkMode={darkMode}>
              {response.causes?.map((group, i) => (
                <div key={i} className="mb-3">
                  <p className="font-medium">Problème {i + 1} :</p>
                  <ul className="list-disc pl-6 space-y-1">
                    {group.map((c, j) => (
                      <li key={j}>{c}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </Accordion>

            <Accordion title="C. Suggestions d’améliorations" darkMode={darkMode}>
              {response.suggestions?.map((group, i) => (
                <div key={i} className="mb-3">
                  <p className="font-medium">Suggestion {i + 1} :</p>
                  <ul className="list-disc pl-6 space-y-1">
                    {group.map((s, j) => (
                      <li key={j}>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </Accordion>
          </div>
        </div>
      ) : (
        !loading && (
          <p className="text-center text-gray-500 dark:text-gray-400">
            Entrez un problème ou une cause pour rechercher...
          </p>
        )
      )}
      <footer  className="  text-center w-1/2 m-auto">Copyright ©  <a href="https://github.com/branGitfox" className=" text-blue-300 underline decoration-dotted decoration-blue-800">BranGitfox</a> {new Date().getFullYear()}</footer>
    </div>
  );
}

function Accordion({ title, children, darkMode }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`border rounded-xl mb-2 transition ${
        darkMode ? "border-gray-700" : "border-gray-200"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-3 font-semibold text-left"
      >
        {title}
        <span>{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="p-3 border-t dark:border-gray-700">{children}</div>
      )}
    </div>
  );
}
