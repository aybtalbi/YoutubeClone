import classes from "./MenuDeFilter.module.css";
import { useContext } from "react";
import React from "react";
import Context from "../../store/Context/context";

const MenuDeFilter = React.memo(function MenuDeFilter() {
  const ctx = useContext(Context)
   function TriDeRecherche(event){
     ctx.setOrdreRecherche(event.target.value)
  }


  return (
      <div className={classes.menu}>
        <div className={classes.titre}>Ordre de Recherche : </div>
        <div><label><input type="radio" name="tri" onChange={TriDeRecherche} value="date"/><span> Plus Recent</span></label></div>
        <div><label><input type="radio" name="tri" onChange={TriDeRecherche} value="viewCount"/><span> Plus Vu </span></label></div> 
        <div><label><input type="radio" name="tri" onChange={TriDeRecherche} value="rating"/><span> Plus Evalue</span></label></div> 
        <div><label><input type="radio" name="tri" onChange={TriDeRecherche} value="title"/><span> Par titre</span></label></div> 
      </div>
  );
});

export default MenuDeFilter;
