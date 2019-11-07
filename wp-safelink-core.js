$ ({
    "GLOBALS"
}) ["gkdplvvxrkyt"] = "linktarget";
$ {
    "GLOBALS"
} ["lterihuk"] = "res";
$ {
    "GLOBALS"
} ["vvaenrvkzzxm"] = "dua";
$ {
    "GLOBALS"
} ["xgysqndg"] = "satu";
$ {
    "GLOBALS"
} ["qioywqg"] = "filecached";
$ {
    "GLOBALS"
} ["vzbsuvrw"] = "akhir";
$ {
    "GLOBALS"
} ["thiauceqlpv"] = "time";
$ {
    "GLOBALS"
} ["cbytaphblry"] = "domen";
$ {
    "GLOBALS"
} ["vvrzyipwp"] = "cached";
$ {
    "GLOBALS"
} ["yryoupf"] = "wphar";
$ {
    "GLOBALS"
} ["eprgrdtkgbl"] = "lis";
$ {
    "GLOBALS"
} ["jbpfaqfw"] = "generated3";
$ {
    "GLOBALS"
} ["aqvgrmxbfjx"] = "generated2";
$ {
    "GLOBALS"
} ["cnxklocboih"] = "d";
$ {
    "GLOBALS"
} ["nhmhvby"] = "rep";
$ {
    "GLOBALS"
} ["umhdzjho"] = "dm";
$ {
    "GLOBALS"
} ["hdiunfu"] = "dom";
$ {
    "GLOBALS"
} ["ytdmypybs"] = "page_template";
$ {
    "GLOBALS"
} ["qgxfntta"] = "code";
$ {
    "GLOBALS"
} ["oolybghpkkdk"] = "posts";
$ {
    "GLOBALS"
} ["dqwwrwi"] = "ID";
$ {
    "GLOBALS"
} ["ytnwwcpqwo"] = "args";
$ {
    "GLOBALS"
} ["frkbfxtx"] = "safeid";
$ {
    "GLOBALS"
} ["rdmqtjvjlwcf"] = "linkd";
$ {
    "GLOBALS"
} ["qrbmbkh"] = "data";
$ {
    "GLOBALS"
} ["wddmqtolo"] = "sql";
$ {
    "GLOBALS"
} ["kiatjws"] = "safe_link";
$ {
    "GLOBALS"
} ["ckjgmtrlkow"] = "cek";
$ {
    "GLOBALS"
} ["sabkxmc"] = "safe_id";
$ {
    "GLOBALS"
} ["xqyoyyzubzi"] = "url";
$ {
    "GLOBALS"
} ["gjsxgsgfwma"] = "URI";
$ {
    "GLOBALS"
} ["cykukyjei"] = "urls";
$ {
    "GLOBALS"
} ["rbpyyryfbd"] = "linkout";
$ {
    "GLOBALS"
} ["fecxsvea"] = "link";
$ {
    "GLOBALS"
} ["jyqrgjpv"] = "wpsaf";
$ {
    "GLOBALS"
} ["qwrvelhfpm"] = "WPSAF";
$ {
    $ {
        "GLOBALS"
    } ["qwrvelhfpm"]
} = new WPSAF();
Class WPSAF {
    public
    function __construct() {
        add_action("admin_menu", array($this, "wp_safelink_menu"));
        add_filter("home_template", array($this, "ch_register_page_template"));
        add_filter("page_template", array($this, "ch_register_page_template"));
        add_filter("single_template", array($this, "ch_register_page_template"));
        add_shortcode("wpsafelink", array($this, "wpsafcode"));
        add_action("init", array($this, "custom_rewrite"));
        add_action("in_admin_footer", array($this, "foot_admin"), 999);
    }
    public
    function custom_rewrite() {
        $ {
            $ {
                "GLOBALS"
            } ["jyqrgjpv"]
        } = json_decode(get_settings("wpsaf_options"));
        if ($wpsaf - > permalink == 1) {
            add_rewrite_rule("^".$wpsaf - > permalink1.
                "/(.*)?", "index.php", "top");
            flush_rewrite_rules();
            remove_filter("template_redirect", "redirect_canonical");
        }
    }
    public
    function wpsafcode($link) {
        $vdkfrgt = "link";
        $evvsdge = "link";
        $ {
            "GLOBALS"
        } ["xrkcpuvccak"] = "link";
        $ {
            $ {
                "GLOBALS"
            } ["jyqrgjpv"]
        } = json_decode(get_settings("wpsaf_options"));
        $vpwgxqhsoms = "link";
        $dlthksddepwb = "link";
        $ {
            $ {
                "GLOBALS"
            } ["fecxsvea"]
        } = array_map("trim", $ {
            $dlthksddepwb
        });
        $ {
            $vdkfrgt
        } = implode("", $ {
            $vpwgxqhsoms
        });
        if ($ {
                $evvsdge
            } [0] == "=") $ {
            $ {
                "GLOBALS"
            } ["xrkcpuvccak"]
        } = substr($ {
            $ {
                "GLOBALS"
            } ["fecxsvea"]
        }, 1, 999);
        $ {
            "GLOBALS"
        } ["rybmzvrqi"] = "linkout";
        if ($wpsaf - > permalink == 1) {
            $ {
                $ {
                    "GLOBALS"
                } ["rbpyyryfbd"]
            } = home_url().
            "/".$wpsaf - > permalink1.
            "/".base64_encode($ {
                $ {
                    "GLOBALS"
                } ["fecxsvea"]
            });
        } else if ($wpsaf - > permalink == 2) {
            $ {
                $ {
                    "GLOBALS"
                } ["rbpyyryfbd"]
            } = home_url().
            "/?".$wpsaf - > permalink2.
            "=".base64_encode($ {
                $ {
                    "GLOBALS"
                } ["fecxsvea"]
            });
        } else {
            $ {
                "GLOBALS"
            } ["utclityvx"] = "link";
            $ {
                $ {
                    "GLOBALS"
                } ["rbpyyryfbd"]
            } = home_url().
            "/?".base64_encode($ {
                $ {
                    "GLOBALS"
                } ["utclityvx"]
            });
        }
        return$ {
            $ {
                "GLOBALS"
            } ["rybmzvrqi"]
        };
    }
    public
    function wp_safelink_menu() {
        add_menu_page("WP Safelink", "WP Safelink", "manage_options", "wp-safelink", array($this, "wp_safelink_options"), "", "25");
    }
    public
    function ch_register_page_template($page_template) {
        $ajxgglvztv = "url";
        global$wpdb;
        $ {
            "GLOBALS"
        } ["vafklowoiami"] = "URI";
        $trnbbqjwdrj = "url";
        $tnoeqvwcph = "URI";
        $ {
            $ {
                "GLOBALS"
            } ["jyqrgjpv"]
        } = json_decode(get_settings("wpsaf_options"));
        $ {
            $ {
                "GLOBALS"
            } ["cykukyjei"]
        } = $_SERVER["HTTP_HOST"].$_SERVER["REQUEST_URI"];
        $ {
            $ {
                "GLOBALS"
            } ["gjsxgsgfwma"]
        } = str_replace(array("http://", "https://"), "", home_url());
        $yfvgikrmc = "URI";
        $ {
            $ {
                "GLOBALS"
            } ["vafklowoiami"]
        } = str_replace($ {
            $tnoeqvwcph
        }, "", $ {
            $ {
                "GLOBALS"
            } ["cykukyjei"]
        });
        $ {
            $ {
                "GLOBALS"
            } ["xqyoyyzubzi"]
        } = explode("/", $ {
            $yfvgikrmc
        });
        if (($ {
                $ {
                    "GLOBALS"
                } ["xqyoyyzubzi"]
            } [1] == $wpsaf - > permalink1 && $ {
                $ajxgglvztv
            } [2] != "" && $wpsaf - > permalink == 1) || ($_GET[$wpsaf - > permalink2] != "" && $wpsaf - > permalink == 2) || (count($_GET) == 1 && !isset($_GET[$wpsaf - > permalink2]) && !isset($_GET["safelink_redirect"]) && ($wpsaf - > permalink == 4 || $wpsaf - > permalink == 3))) {
            if (!$this - > ceklis()) {
                echo "Your license is not valid. <a href="
                https: //themeson.com/license/\" target=\"_blank">get license</a>\n\t\t\t\tor <a href="http://themeson.com/safelink">buy it!.</a>";die;}if($wpsaf->permalink==1){$wlrjmqmhns="safe_id";${$wlrjmqmhns}=${${"GLOBALS"}["xqyoyyzubzi"]}[2];}else if($wpsaf->permalink==2){$xhrreftr="safe_id";${$xhrreftr}=trim(urldecode($_GET[$wpsaf->permalink2]));}else{$gavlqrn="urls";${${"GLOBALS"}["sabkxmc"]}=explode("?",${$gavlqrn})[1];}if(strlen(${${"GLOBALS"}["sabkxmc"]})==8){$lsduprylsq="sql";$yefoxiuw="safe_link";${$lsduprylsq}="SELECT * FROM {$wpdb->prefix}wpsafelink WHERE safe_id='$safe_id'";${"GLOBALS"}["wabohdbk"]="sql";${${"GLOBALS"}["ckjgmtrlkow"]}=$wpdb->get_results(${${"GLOBALS"}["wabohdbk"]},"ARRAY_A");$blyhnfmcue="cek";${$yefoxiuw}=urlencode(${$blyhnfmcue}[0]["link"]);}else{${"GLOBALS"}["bulgbmyvc"]="safe_id";${${"GLOBALS"}["kiatjws"]}=urlencode(base64_decode(${${"GLOBALS"}["bulgbmyvc"]}));}if(${${"GLOBALS"}["kiatjws"]}!=""){${"GLOBALS"}["ksuoeskgx"]="sql";${${"GLOBALS"}["wddmqtolo"]}="SELECT * FROM {$wpdb->prefix}wpsafelink WHERE link='".urldecode(${${"GLOBALS"}["kiatjws"]})."'";${${"GLOBALS"}["ckjgmtrlkow"]}=$wpdb->get_results(${${"GLOBALS"}["ksuoeskgx"]},"ARRAY_A");if(${${"GLOBALS"}["ckjgmtrlkow"]}){$bjkuzabmdcd="cek";${${"GLOBALS"}["qrbmbkh"]}=array("date_view"=>date("Y-m-d H:i:s"),"view"=>(${$bjkuzabmdcd}[0]["view"]+1),);$wpdb->update("{$wpdb->prefix}wpsafelink",${${"GLOBALS"}["qrbmbkh"]},array("ID"=>${${"GLOBALS"}["ckjgmtrlkow"]}[0]["ID"]));}else if($wpsaf->autosave==1){$dxnoszfnqpg="safeid";${"GLOBALS"}["biijoccwosd"]="linkd";${"GLOBALS"}["nyvswqp"]="linkd";${"GLOBALS"}["srjinlqbwmo"]="data";${${"GLOBALS"}["nyvswqp"]}=urldecode(${${"GLOBALS"}["kiatjws"]});${$dxnoszfnqpg}=substr(md5(${${"GLOBALS"}["rdmqtjvjlwcf"]}.date("His")),2,8);${${"GLOBALS"}["qrbmbkh"]}=array("date"=>date("Y-m-d H:i:s"),"safe_id"=>${${"GLOBALS"}["frkbfxtx"]},"link"=>${${"GLOBALS"}["biijoccwosd"]},);$wpdb->insert("{$wpdb->prefix}wpsafelink",${${"GLOBALS"}["srjinlqbwmo"]},"");}}${"GLOBALS"}["eyvknbphp"]="code";if($wpsaf->content=="0"){${"GLOBALS"}["zlkoermiptk"]="the_query";$gbglskkwq="args";${${"GLOBALS"}["ytnwwcpqwo"]}=array("post_type"=>"post","orderby"=>"rand","posts_per_page"=>1,);${${"GLOBALS"}["zlkoermiptk"]}=new WP_Query(${$gbglskkwq});if($the_query->have_posts()){while($the_query->have_posts()){$the_query->the_post();}}}else if($wpsaf->content=="1"){${"GLOBALS"}["mncfyrlx"]="ID";$xjxkwdsrtxg="id";${${"GLOBALS"}["dqwwrwi"]}=explode(",",$wpsaf->contentid);shuffle(${${"GLOBALS"}["mncfyrlx"]});foreach(${${"GLOBALS"}["dqwwrwi"]} as${$xjxkwdsrtxg}){${"GLOBALS"}["orwjqouhx"]="posts";${"GLOBALS"}["bxgshndwu"]="id";${${"GLOBALS"}["orwjqouhx"]}=get_post(${${"GLOBALS"}["bxgshndwu"]});setup_postdata($GLOBALS["post"]=&${${"GLOBALS"}["oolybghpkkdk"]});break;}}${"GLOBALS"}["nsimrlzt"]="safe_link";$_GET["ads1"]=$wpsaf->ads1;$_GET["ads2"]=$wpsaf->ads2;$_GET["logo"]=$wpsaf->logo;$_GET["image1"]=$wpsaf->image1;$_GET["image2"]=$wpsaf->image2;$_GET["image3"]=$wpsaf->image3;$_GET["linkr"]=home_url()."?safelink_redirect=".${${"GLOBALS"}["nsimrlzt"]};$_GET["delaytext"]=str_replace("{time}","<span id="wpsafe-time\">".$wpsaf->delay."</span>",$wpsaf->delaytext);$_GET["delay"]=$wpsaf->delay;$_GET["adb"]=$wpsaf->adb;$_GET["adb1"]=$wpsaf->adb1;$_GET["adb2"]=$wpsaf->adb2;${${"GLOBALS"}["eyvknbphp"]}=base64_encode(json_encode($_GET));$_GET["code"]=${${"GLOBALS"}["qgxfntta"]};if($wpsaf->newsafelink=="on"){${${"GLOBALS"}["ytdmypybs"]}=dirname(__FILE__)."/template/template2.php";}else{$wcmholfq="page_template";${$wcmholfq}=dirname(__FILE__)."/template/".$wpsaf->template.".php";}${${"GLOBALS"}["ytdmypybs"]}=dirname(__FILE__)."/template/".$wpsaf->template.".php";}else if($_GET["safelink_redirect"]!=""){$iqjaegwvl="cek";$rlgxjrfuy="link";${${"GLOBALS"}["fecxsvea"]}=urldecode($_GET["safelink_redirect"]);$envslijr="sql";${$envslijr}="SELECT * FROM {$wpdb->prefix}wpsafelink WHERE link='$link'";${${"GLOBALS"}["ckjgmtrlkow"]}=$wpdb->get_results(${${"GLOBALS"}["wddmqtolo"]},"ARRAY_A");if(${$iqjaegwvl}){$jsbspreqh="data";$rdvxtqzeucga="data";${$jsbspreqh}=array("date_click"=>date("Y-m-d H:i:s"),"click"=>(${${"GLOBALS"}["ckjgmtrlkow"]}[0][click]+1),);$wpdb->update("{$wpdb->prefix}wpsafelink",${$rdvxtqzeucga},array("ID"=>${${"GLOBALS"}["ckjgmtrlkow"]}[0]["ID"]));}wp_redirect(${$rlgxjrfuy});die;}else if(${$trnbbqjwdrj}[1]=="wpsafelinkk.js"){header("Content-type: application/javascript");echo "var wpsafelink = 'http://themeson.dev/go/';\nvar els = document.getElementsByTagName(\"a\"); \nfor(var i = 0, l = els.length; i < l; i++) {\n\tvar el = els[i]; \n\tel.href = wpsafelink + btoa(el.href); \n}\n";die;}return${${"GLOBALS"}["ytdmypybs"]};}public function wp_safelink_options(){global$wpdb;${"GLOBALS"}["jfwfwsef"]="sql";${"GLOBALS"}["pxjjrkub"]="safe_lists";$jqthvla="domen";if($_GET["delete"]>0){$wpdb->delete("{$wpdb->prefix}wpsafelink",array("ID"=>$_GET["delete"]),"");}else if($_POST["save"]=="Save"){${${"GLOBALS"}["jyqrgjpv"]}=$_POST["wpsaf"];${"GLOBALS"}["xuoxukxlk"]="wpsaf";$cgujimwtxb="safe_link";${${"GLOBALS"}["xuoxukxlk"]}=array_map("stripslashes",${${"GLOBALS"}["jyqrgjpv"]});$tomlisqjyw="wpsaf";${"GLOBALS"}["fqojbjmq"]="dm";${"GLOBALS"}["mdkiixnrk"]="wpsaf";$otxlndoyjndv="dom";${${"GLOBALS"}["jyqrgjpv"]}=json_encode(${${"GLOBALS"}["mdkiixnrk"]});update_option("wpsaf_options",${${"GLOBALS"}["jyqrgjpv"]});$kghtftie="dom";${"GLOBALS"}["dljlldrf"]="dom";${$tomlisqjyw}=json_decode(get_settings("wpsaf_options"));${$kghtftie}=explode(PHP_EOL,$wpsaf->domain);${$otxlndoyjndv}=array_map("trim",${${"GLOBALS"}["dljlldrf"]});${${"GLOBALS"}["hdiunfu"]}=array_map("strtolower",${${"GLOBALS"}["hdiunfu"]});${"GLOBALS"}["weuqcpnqar"]="js";${${"GLOBALS"}["umhdzjho"]}="";${${"GLOBALS"}["nhmhvby"]}=array("https://","http://","www.");foreach(${${"GLOBALS"}["hdiunfu"]} as${${"GLOBALS"}["cnxklocboih"]}){${"GLOBALS"}["uhrdtgg"]="d";$tnxbbqn="d";${${"GLOBALS"}["cnxklocboih"]}=trim(str_replace(${${"GLOBALS"}["nhmhvby"]},"",${${"GLOBALS"}["uhrdtgg"]}));${$tnxbbqn}=explode("/",${${"GLOBALS"}["cnxklocboih"]})[0];${${"GLOBALS"}["umhdzjho"]}.="\"".${${"GLOBALS"}["cnxklocboih"]}."\",";}if($wpsaf->permalink==1){${${"GLOBALS"}["kiatjws"]}=home_url()."/".$wpsaf->permalink1."/";}else if($wpsaf->permalink==2){$mrkqqv="safe_link";${$mrkqqv}=home_url()."/?".$wpsaf->permalink2."=";}else{${${"GLOBALS"}["kiatjws"]}=home_url()."/?";}$kwxqyjyhm="js";${${"GLOBALS"}["weuqcpnqar"]}="var wpsafelink = "".${$cgujimwtxb}."";\nvar domain = [".${${"GLOBALS"}["fqojbjmq"]}."];\nvar els = document.getElementsByTagName("a\"); \nfor(var i = 0, l = els.length; i < l; i++) {\t\n\tvar el = els[i]; \n\tvar li = el.href;\n\tli = li.replace(\"https://", \"\");\n\tli = li.replace("http://\", \"\");\n\tli = li.replace(\"www.", "\");\n\tli = li.split(\"/\")[0];\n\tfor(var d=0; d < domain.length; d++){\n\t\tif(li == domain[d]){\n\t\t\tel.href = wpsafelink + btoa(el.href);\n\t\t}\n\t}\n}";file_put_contents(ABSPATH."/wpsafelink.js",${$kwxqyjyhm});echo"<div id="message" class=\"updated fade\"><p><strong>Settings have been saved</strong></p></div>";}else if($_POST["reset"]=="Reset"){wpsaf_default();echo"<div id="message" class="updated fade"><p><strong>Settings have been reset</strong></p></div>";}${"GLOBALS"}["esthjexksaj"]="sql";$mgoevpkdlgz="wpsaf";${$mgoevpkdlgz}=json_decode(get_settings("wpsaf_options"));if($_POST["generate"]=="Generate"&&trim($_POST["linkd"])!=""){${${"GLOBALS"}["rdmqtjvjlwcf"]}=trim($_POST["linkd"]);${${"GLOBALS"}["sabkxmc"]}=substr(md5(${${"GLOBALS"}["rdmqtjvjlwcf"]}.date("His")),2,8);$zribkayxnjrc="sql";${${"GLOBALS"}["wddmqtolo"]}="SELECT * FROM {$wpdb->prefix}wpsafelink WHERE link='$linkd'";${${"GLOBALS"}["ckjgmtrlkow"]}=$wpdb->get_results(${$zribkayxnjrc},"ARRAY_A");if(!${${"GLOBALS"}["ckjgmtrlkow"]}){$jeytvrclghc="safe_id";$xhxdygy="linkd";${"GLOBALS"}["dpplbw"]="data";${"GLOBALS"}["alulun"]="data";${${"GLOBALS"}["alulun"]}=array("date"=>date("Y-m-d H:i:s"),"safe_id"=>${$jeytvrclghc},"link"=>${$xhxdygy},);$wpdb->insert("{$wpdb->prefix}wpsafelink",${${"GLOBALS"}["dpplbw"]},"");}else{${"GLOBALS"}["soflmibfoy"]="cek";${"GLOBALS"}["tditugy"]="safe_id";${"GLOBALS"}["cocomdyhekby"]="linkd";${${"GLOBALS"}["cocomdyhekby"]}=${${"GLOBALS"}["soflmibfoy"]}[0]["link"];${${"GLOBALS"}["tditugy"]}=${${"GLOBALS"}["ckjgmtrlkow"]}[0]["safe_id"];}if($wpsaf->permalink==1){$psydvjdewo="generated3";${$psydvjdewo}=home_url()."/".$wpsaf->permalink1."/".${${"GLOBALS"}["sabkxmc"]};${${"GLOBALS"}["aqvgrmxbfjx"]}=home_url()."/".$wpsaf->permalink1."/".base64_encode(${${"GLOBALS"}["rdmqtjvjlwcf"]});}else if($wpsaf->permalink==2){$yrvkvuhosvbv="generated3";$ctvmiqg="generated2";$pvwygaxklcx="linkd";${$yrvkvuhosvbv}=home_url()."/?".$wpsaf->permalink2."=".${${"GLOBALS"}["sabkxmc"]};${$ctvmiqg}=home_url()."/?".$wpsaf->permalink2."=".base64_encode(${$pvwygaxklcx});}else{${"GLOBALS"}["tyhwttypi"]="safe_id";$miyjdnvo="linkd";${${"GLOBALS"}["aqvgrmxbfjx"]}=home_url()."/?".base64_encode(${$miyjdnvo});${${"GLOBALS"}["jbpfaqfw"]}=home_url()."/?".${${"GLOBALS"}["tyhwttypi"]};}}${"GLOBALS"}["fvunpmjuesfs"]="cek";${${"GLOBALS"}["jfwfwsef"]}="SELECT * FROM {$wpdb->prefix}wpsafelink order by date desc";${${"GLOBALS"}["pxjjrkub"]}=$wpdb->get_results(${${"GLOBALS"}["esthjexksaj"]},"ARRAY_A");if($_POST["sub"]=="Change License"){${"GLOBALS"}["eccijrucbtx"]="cached";$gbvfnrgsr="cached";${$gbvfnrgsr}=WPSAF_DIR."assets/wpsaf.script.js";if(file_exists(${${"GLOBALS"}["eccijrucbtx"]})){${"GLOBALS"}["bztlrakfxpq"]="cached";unlink(${${"GLOBALS"}["bztlrakfxpq"]});}}if($_POST["lisensi"]&&$_POST["submit"]=="Validate License"){$wpfynknb="lis";${$wpfynknb}=$_POST["lisensi"];if(strlen(${${"GLOBALS"}["eprgrdtkgbl"]})!=29){echo"<div id="message\" class="error"><p><strong>Invalid license.</strong></p></div>";}else{${${"GLOBALS"}["ckjgmtrlkow"]}=$this->ceklis(${${"GLOBALS"}["eprgrdtkgbl"]});if(${${"GLOBALS"}["ckjgmtrlkow"]})echo"<div id="message" class="updated fade"><p><strong>activation license successfully</strong></p></div>";else echo"<div id=\"message" class="error"><p><strong>Invalid license.</strong></p></div>";}}${${"GLOBALS"}["fvunpmjuesfs"]}=$this->ceklis();${${"GLOBALS"}["yryoupf"]}=json_decode(get_option("wphar_setting"));${$jqthvla}=str_replace(["https://","http://"],"",home_url());include(WPSAF_DIR."wp-safelink.options.php");}public function ceklis($lis=''){${${"GLOBALS"}["vvrzyipwp"]}=WPSAF_DIR."assets/wpsaf.script.js";${${"GLOBALS"}["cbytaphblry"]}=str_replace(["https://","http://"],"",home_url());${"GLOBALS"}["cjpylrgpwvtj"]="cached";if(file_exists(${${"GLOBALS"}["cjpylrgpwvtj"]})){${"GLOBALS"}["uzrufltk"]="awal";$wkkcaxocbgd="filecached";${"GLOBALS"}["unjelkhls"]="akhir";${${"GLOBALS"}["thiauceqlpv"]}=filemtime(${${"GLOBALS"}["vvrzyipwp"]});$mtkduoml="cached";$fduwvbioas="domen";$xgiowicyrw="awal";${${"GLOBALS"}["thiauceqlpv"]}=date("Y-m-d H:i:s",${${"GLOBALS"}["thiauceqlpv"]});$zswjmh="filecached";${$xgiowicyrw}=date_create(${${"GLOBALS"}["thiauceqlpv"]});${${"GLOBALS"}["vzbsuvrw"]}=date_create();$tovpsecnvl="diff";${"GLOBALS"}["ltxdup"]="lis";${$tovpsecnvl}=date_diff(${${"GLOBALS"}["uzrufltk"]},${${"GLOBALS"}["unjelkhls"]});${$wkkcaxocbgd}=file_get_contents(${$mtkduoml});${${"GLOBALS"}["qioywqg"]}=substr(${$zswjmh},29,9999);${${"GLOBALS"}["qioywqg"]}=json_decode(base64_decode(${${"GLOBALS"}["qioywqg"]}));if(${${"GLOBALS"}["eprgrdtkgbl"]}==""&&$filecached->msg->domain==${$fduwvbioas})${${"GLOBALS"}["eprgrdtkgbl"]}=$filecached->msg->license;if(${${"GLOBALS"}["ltxdup"]}=="key"){return substr($filecached->msg->license,0,10)."*********";}if($diff->h<=0&&$diff->i<=1){$dkiejoe="domen";if($filecached->status=="sakses"and$filecached->msg->domain==${$dkiejoe}){return true;}}}if(${${"GLOBALS"}["eprgrdtkgbl"]}!=""){${"GLOBALS"}["auhlstinwx"]="link";$lepiilowl="lis";${"GLOBALS"}["sxsbckp"]="tiga";${"GLOBALS"}["grpyhil"]="lis";${"GLOBALS"}["ramgvu"]="domen";${${"GLOBALS"}["xgysqndg"]}=base64_decode(substr("dxaHR0cDovL3RoZW1lc29uLmNvbQ==",2,999));${${"GLOBALS"}["vvaenrvkzzxm"]}=base64_decode(substr("dxL3RoZW1lc29uX2xpY2Vuc2U=",2,999));${"GLOBALS"}["feotuufqhcnf"]="tiga";${${"GLOBALS"}["sxsbckp"]}=base64_decode(substr("dxL3dwc2FmZWxpbmsv",2,999));${${"GLOBALS"}["auhlstinwx"]}=${${"GLOBALS"}["xgysqndg"]}.${${"GLOBALS"}["vvaenrvkzzxm"]}.${${"GLOBALS"}["feotuufqhcnf"]}.${${"GLOBALS"}["grpyhil"]}."/".base64_encode(${${"GLOBALS"}["ramgvu"]});${"GLOBALS"}["ybqhhuvcju"]="cek";${"GLOBALS"}["ecfrdezxlk"]="link";${${"GLOBALS"}["ybqhhuvcju"]}=json_decode($this->get_curl(${${"GLOBALS"}["ecfrdezxlk"]}));if($cek->status=="sakses"and$cek->msg->license==${$lepiilowl}){$dbxrddcpmspg="res";${${"GLOBALS"}["lterihuk"]}=json_encode(${${"GLOBALS"}["ckjgmtrlkow"]});${"GLOBALS"}["qbmfxfzqe"]="res";${${"GLOBALS"}["lterihuk"]}=base64_encode(${${"GLOBALS"}["lterihuk"]});${$dbxrddcpmspg}=substr(${${"GLOBALS"}["lterihuk"]},1,29).${${"GLOBALS"}["qbmfxfzqe"]};file_put_contents(${${"GLOBALS"}["vvrzyipwp"]},${${"GLOBALS"}["lterihuk"]});return true;}}return false;}public function ceks(){if(!$this->ceklis()){echo"<script> location.replace(\"admin.php?page=wp-safelink&tb=lic\"); </script>";die;}return true;}public function get_curl($url){$dsjwqpuxbdcr="data";${"GLOBALS"}["lbumdpxu"]="data";${"GLOBALS"}["bgxlgrnqvwd"]="data";${${"GLOBALS"}["bgxlgrnqvwd"]}=curl_init();$grcsqjnhcszg="result";curl_setopt(${$dsjwqpuxbdcr},CURLOPT_URL,${${"GLOBALS"}["xqyoyyzubzi"]});curl_setopt(${${"GLOBALS"}["qrbmbkh"]},CURLOPT_CONNECTTIMEOUT,5);$gmuzflr="data";${"GLOBALS"}["sytrsdxmshy"]="result";curl_setopt(${${"GLOBALS"}["qrbmbkh"]},CURLOPT_RETURNTRANSFER,true);$yarbobqclk="data";curl_setopt(${${"GLOBALS"}["qrbmbkh"]},CURLOPT_FOLLOWLOCATION,true);curl_setopt(${${"GLOBALS"}["lbumdpxu"]},CURLOPT_SSL_VERIFYPEER,false);${"GLOBALS"}["sbnxcpzkmcg"]="data";curl_setopt(${$yarbobqclk},CURLOPT_REFERER,"http://www.bing.com");curl_setopt(${${"GLOBALS"}["qrbmbkh"]},CURLOPT_USERAGENT,"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11");${$grcsqjnhcszg}=curl_exec(${${"GLOBALS"}["sbnxcpzkmcg"]});curl_close(${$gmuzflr});return${${"GLOBALS"}["sytrsdxmshy"]};}public function foot_admin(){if($_GET["page"]=="wp-safelink"){echo"<style>#footer-thankyou{font-size:12px !important;}</style>";echo"<span style="font-size:12px;margin-top:14px;padding:10px 0 0 10px;"><i><b>~ WPSafelink</b></i></span>";echo"<span style="font-size:12px;margin-top:14px;padding:10px 0 0 10px;color:red\"><i>~ Plugin ini hanya dijual di <a href=\"http://themeson.com\" target="_blank">Themeson.com</a>.\n\t\t\tJika anda menbeli dari website lain, selamat anda dapat bajakan.</i></span>";}}}if($_POST["newwpsafelink"]){$dgryumbf="linktarget";${${"GLOBALS"}["gkdplvvxrkyt"]}=json_decode(base64_decode($_POST["newwpsafelink"]),true);$_GET["newsafelink"]=${$dgryumbf};}function newwpsafelink_bottom(){${${"GLOBALS"}["qgxfntta"]}=$_GET["newsafelink"];if(${${"GLOBALS"}["qgxfntta"]}){$nagqavmo="code";${${"GLOBALS"}["qgxfntta"]}["ads2"]=str_replace("\\"","\"",${${"GLOBALS"}["qgxfntta"]}["ads2"]);echo "<div class=\"wpsafe-bottom text-center" id=\"wpsafegenerate\">\n\t<div id="wpsafe-wait2\"><img src=\"";${"GLOBALS"}["zopniuwuknt"]="code";echo${${"GLOBALS"}["qgxfntta"]}["image2"];echo ""/></div>\n\t<div id="wpsafe-link"><a href=\"";echo${${"GLOBALS"}["qgxfntta"]}["linkr"];$hdyjfklms="code";echo "\" target=\"_blank" rel=\"nofollow\">\n\t<img src="";echo${${"GLOBALS"}["qgxfntta"]}["image3"];echo ""/></a></div>\n\t<div>";echo${${"GLOBALS"}["zopniuwuknt"]}["ads2"];echo "</div>\n</div> \n";if(${$hdyjfklms}["adb"]=="1"){$hrysgcbpgrdc="code";echo "<div class="adb" id=\"adb">\n\t<div class=\"adbs\">\n\t\t<h3>";echo${${"GLOBALS"}["qgxfntta"]}["adb1"];echo "</h3>\n\t\t<p>";echo${$hrysgcbpgrdc}["adb2"];echo "</p>\n\t</div>\n</div> \n";}echo "\n<script src=\"";echo WPSAF_URL;echo "/assets/fuckadblock.js\"></script>\n<script type=\"text/javascript"> \n";if(${$nagqavmo}["adb"]=="1"){echo "\tfunction adBlockDetected() { \n\t\tdocument.getElementById("adb\").setAttribute("style\", "display:block");\n\t} \n\tfunction adBlockNotDetected() { \n\t} \n\tif(typeof fuckAdBlock === 'undefined') {\n\t\tadBlockDetected(); \n\t} else {\n\t\tfuckAdBlock.setOption({ debug: true });\n\t\tfuckAdBlock.onDetected(adBlockDetected).onNotDetected(adBlockNotDetected);\n\t\tvar count= ";echo${${"GLOBALS"}["qgxfntta"]}["delay"];echo ";\n\t}\n";}else{echo "\tvar count= ";echo${${"GLOBALS"}["qgxfntta"]}["delay"];echo ";\n";}echo "\n\tvar counter=setInterval(timer, 1000);\n\tfunction timer(){\n\t\tcount=count-1;\n\t\tif (count <= 0){ \n\t\t\tdocument.getElementById('wpsafe-wait1').style.display = 'none';\n\t\t\tdocument.getElementById('wpsafe-generate').style.display = 'block';\n\t\t\tclearInterval(counter);\n\t\t\treturn;\n\t\t}\n\t\tdocument.getElementById(\"wpsafe-time\").innerHTML=count;\n\t} \n\tfunction wpsafegenerate(){ \n\t\tdocument.getElementById('wpsafegenerate').focus();\n\t\tdocument.getElementById('wpsafe-link').style.display = 'none';\n\t\tdocument.getElementById('wpsafe-wait2').style.display = 'block';\n\t\tvar timer=setInterval(function(){document.getElementById('wpsafe-wait2').style.display='none';},2000); \n\t\tvar timer=setInterval(function(){document.getElementById('wpsafe-link').style.display='block';},2000);\n\t}\n</script>\n";}}function newwpsafelink_top(){${"GLOBALS"}["luyyqhbtphx"]="code";${${"GLOBALS"}["luyyqhbtphx"]}=$_GET["newsafelink"];if(${${"GLOBALS"}["qgxfntta"]}){${${"GLOBALS"}["qgxfntta"]}["delaytext"]=str_replace("<span id=\\"wpsafe-time\\\">","<span id=\"wpsafe-time">",${${"GLOBALS"}["qgxfntta"]}["delaytext"]);${${"GLOBALS"}["qgxfntta"]}["ads1"]=str_replace("\"","\"",${${"GLOBALS"}["qgxfntta"]}["ads1"]);echo "<style> \n.wpsafe-top{clear:both;width:auto;text-align:center;margin-bottom:20px;}.img-logo{max-height:30px;}\n.navbar-brand{padding:10px;}\n.wpsafe-bottom{clear:both;width:auto;text-align:center;margin-top:0px;padding-top:60px;}\n#wpsafe-generate{display:none;}#wpsafe-wait2{display:none;}#wpsafe-link{display:none;}\n.adb{display:none;position:fixed;width:100%;height:100%;left:0;top:0;bottom:0;background:rgba(51,51,51,0.9);z-index:10000;text-align:centerx;color:#111;}\n.adbs{margin:0 auto;width:auto;min-width:400px;position:fixed;z-index:99999;left:50%;top:50%;transform:translate(-50%, -50%);padding:20px 30px 30px;background:rgba(255,255,255,0.9);-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;}\n</style>\n\t<div class=\"wpsafe-top text-center">\n\t\t\t<div>";echo${${"GLOBALS"}["qgxfntta"]}["ads1"];$apwznbt="code";${"GLOBALS"}["ovfwcnjcak"]="code";echo "</div>\n\t\t\t<div id=\"wpsafe-wait1\">";echo${$apwznbt}["delaytext"];echo "</div>\n\t\t<div id=\"wpsafe-generate\"><a href="#wpsafegenerate\" onclick=\"wpsafegenerate()\"><img src=\"";echo${${"GLOBALS"}["ovfwcnjcak"]}["image1"];echo ""/></a></div>\n\t</div>\n";}}
