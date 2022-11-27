<?php
    session_start();
    if(session_status()==PHP_SESSION_ACTIVE && isset($_SESSION['admin'])){
        echo    '<header>
                    <div>
                        <h1>ADIVINA LA CANCIÓN</h1>
                    </div>
                    <div id="admin">
                        <span>'.$_SESSION['admin']['nombre'].'</span>
                        <a href="logout.php">Cerrar sesión</a>
                    </div>
                </header>';
    }
    include '../../html/inicio.html';
