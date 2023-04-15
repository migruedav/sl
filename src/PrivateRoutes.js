import { Outlet, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "./supabase";

const PrivateRoutes = () => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true); // nuevo estado

  async function CheckSession() {
    const { data, error } = await supabase.auth.getSession();
    if (data) {
      if (data.session != null) {
        setAuth(true);
      } else {
        setAuth(false);
      }
    } else if (error) {
      console.error("Error al obtener la sesión:", error);
    } else {
      console.log("Usuario no autenticado");
    }
    setLoading(false); // actualizar estado de carga
  }

  useEffect(() => {
    CheckSession();
  }, []);

  if (loading) { // mostrar indicador de carga mientras se está cargando
    return <div></div>;
  }

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
