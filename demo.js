
var baseUrl = 'https://rest.ehrscape.com/rest/v1';
var queryUrl = baseUrl + '/query';

var username = "ois.seminar";
var password = "ois4fri";

var oseba1;
var oseba2;
var oseba3;

var compositionData1 = {
    "ctx/time": "2014-3-19T13:10Z",
    "ctx/language": "en",
    "ctx/territory": "SI",
    "vital_signs/body_temperature/any_event/temperature|magnitude": 37.1,
    "vital_signs/body_temperature/any_event/temperature|unit": "°C",
    "vital_signs/blood_pressure/any_event/systolic": 130,
    "vital_signs/blood_pressure/any_event/diastolic": 90,
    "vital_signs/height_length/any_event/body_height_length": 171,
    "vital_signs/body_weight/any_event/body_weight": 57.2
};
var compositionData2 = {
    "ctx/time": "2014-3-19T13:10Z",
    "ctx/language": "en",
    "ctx/territory": "SI",
    "vital_signs/body_temperature/any_event/temperature|magnitude": 37.1,
    "vital_signs/body_temperature/any_event/temperature|unit": "°C",
    "vital_signs/blood_pressure/any_event/systolic": 110,
    "vital_signs/blood_pressure/any_event/diastolic": 70,
    "vital_signs/height_length/any_event/body_height_length": 171,
    "vital_signs/body_weight/any_event/body_weight": 57.2
};
var compositionData3 = {
    "ctx/time": "2014-3-19T13:10Z",
    "ctx/language": "en",
    "ctx/territory": "SI",
    "vital_signs/body_temperature/any_event/temperature|magnitude": 37.1,
    "vital_signs/body_temperature/any_event/temperature|unit": "°C",
    "vital_signs/blood_pressure/any_event/systolic": 180,
    "vital_signs/blood_pressure/any_event/diastolic": 110,
    "vital_signs/height_length/any_event/body_height_length": 171,
    "vital_signs/body_weight/any_event/body_weight": 57.2
};

function getSessionId() {
    var response = $.ajax({
        type: "POST",
        url: baseUrl + "/session?username=" + encodeURIComponent(username) +
                "&password=" + encodeURIComponent(password),
        async: false
    });
    return response.responseJSON.sessionId;
}

function kreirajEHRzaBolnika1() {
    
sessionId = getSessionId();
$.ajaxSetup({
    headers: {
        "Ehr-Session": sessionId
    }
});
$.ajax({
    url: baseUrl + "/ehr",
    type: 'POST',
    success: function (data) {
        var ehrId = data.ehrId;
		oseba1 = ehrId;
        // build party data
        var partyData = {
            firstNames: "Maj",
            lastNames: "Antesic",
            dateOfBirth: "1992-6-14T19:30",
            partyAdditionalInfo: [
                {
                    key: "ehrId",
                    value: ehrId
                }
            ]
        };
        $.ajax({
            url: baseUrl + "/demographics/party",
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(partyData),
            success: function (party) {
                if (party.action == 'CREATE') {
                    $("#kreirajSporocilo").html("<span class='obvestilo label label-success fade-in'>Uspešno kreiran EHR '" + ehrId + "'.</span>");
		            console.log("Uspešno kreiran EHR '" + ehrId + "'.");
                }
            }
        });
        
        var queryParams = {
            "ehrId": oseba1,
            templateId: 'Vital Signs',
            format: 'FLAT',
            committer: 'Belinda Nurse'
            };
            $.ajax({
            url: baseUrl + "/composition?" + $.param(queryParams),
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(compositionData1),
            success: function (res) {
        }
    });
    
    }
});
}
function kreirajEHRzaBolnika2() {
    
sessionId = getSessionId();
$.ajaxSetup({
    headers: {
        "Ehr-Session": sessionId
    }
});
$.ajax({
    url: baseUrl + "/ehr",
    type: 'POST',
    success: function (data) {
        var ehrId = data.ehrId;
		oseba2 = ehrId;
        // build party data
        var partyData = {
            firstNames: "Ivan",
            lastNames: "Antesic",
            dateOfBirth: "1994-7-24T19:30",
            partyAdditionalInfo: [
                {
                    key: "ehrId",
                    value: ehrId
                }
            ]
        };
        $.ajax({
            url: baseUrl + "/demographics/party",
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(partyData),
            success: function (party) {
                if (party.action == 'CREATE') {
                    $("#kreirajSporocilo").html("<span class='obvestilo label label-success fade-in'>Uspešno kreiran EHR '" + ehrId + "'.</span>");
		            console.log("Uspešno kreiran EHR '" + ehrId + "'.");
                }
            }
        });
        
        var queryParams = {
            "ehrId": oseba2,
            templateId: 'Vital Signs',
            format: 'FLAT',
            committer: 'Belinda Nurse'
            };
            $.ajax({
            url: baseUrl + "/composition?" + $.param(queryParams),
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(compositionData2),
            success: function (res) {
        }
    });
    
    }
});
}

function kreirajEHRzaBolnika3() {
    
sessionId = getSessionId();
$.ajaxSetup({
    headers: {
        "Ehr-Session": sessionId
    }
});
$.ajax({
    url: baseUrl + "/ehr",
    type: 'POST',
    success: function (data) {
        var ehrId = data.ehrId;
		oseba3 = ehrId;
        // build party data
        var partyData = {
            firstNames: "Vedran",
            lastNames: "Antesic",
            dateOfBirth: "1982-3-12T19:30",
            partyAdditionalInfo: [
                {
                    key: "ehrId",
                    value: ehrId
                }
            ]
        };
        $.ajax({
            url: baseUrl + "/demographics/party",
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(partyData),
            success: function (party) {
                if (party.action == 'CREATE') {
                    $("#kreirajSporocilo").html("<span class='obvestilo label label-success fade-in'>Uspešno kreiran EHR '" + ehrId + "'.</span>");
		            console.log("Uspešno kreiran EHR '" + ehrId + "'.");
                }
            }
        });
        
        var queryParams = {
            "ehrId": oseba3,
            templateId: 'Vital Signs',
            format: 'FLAT',
            committer: 'Belinda Nurse'
            };
            $.ajax({
            url: baseUrl + "/composition?" + $.param(queryParams),
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(compositionData3),
            success: function (res) {
        }
    });
    
    }
});

}
var ime;
var elem;
function izberi() {
	ime = $('#preberiEhrIdZaVitalneZnake').val();
	if (ime == "Maj Antesic"){

	    elem = document.getElementById("meritveVitalnihZnakovEHRid");
        elem.value = oseba1;
	}
	if (ime == "Ivan Antesic"){

	    elem = document.getElementById("meritveVitalnihZnakovEHRid");
        elem.value = oseba2;	
	}
	if (ime == "Vedran Antesic"){

	    elem = document.getElementById("meritveVitalnihZnakovEHRid");
        elem.value = oseba3;	
	}
}

function preberiMeritveVitalnihZnakov(){
    sessionId = getSessionId();
    var ehrId = $("#meritveVitalnihZnakovEHRid").val();
    $.ajaxSetup({
    headers: {
        "Ehr-Session": sessionId
    }
    });
    $.ajax({
        url: baseUrl + "/view/" + ehrId + "/blood_pressure",
        type: 'GET',
        success: function (res) {
            var results = "<table class='table table-striped table-hover'><tr><th>Datum in ura</th><th class='text-right'>Krvni tlak</th></tr>";
            for (var i in res) {
                results += "<tr><td>" + res[i].time + "</td><td class='text-right'>" +res[i].systolic + '/' + res[i].diastolic + res[i].unit + "</td>";
             //  $("#result").append(res[i].time + ': ' + res[i].systolic + '/' + res[i].diastolic + res[i].unit + "<br>");
            }
            results += "</table>";
			$("#result").html(results);
			$("#kreirajSporocilo").html("<span class='obvestilo label label-success fade-in'>Prikazovanje Meritev za: " + ime + "'.</span>");
        }
    });
}


$(document).ready(function() {
	$('#preberiObstojeciEHR').change(function() {
		$("#preberiSporocilo").html("");
		$("#preberiEHRid").val($(this).val());
	});
	$('#preberiPredlogoBolnika').change(function() {
		$("#kreirajSporocilo").html("");
		var podatki = $(this).val().split(",");
		$("#kreirajIme").val(podatki[0]);
		$("#kreirajPriimek").val(podatki[1]);
		$("#kreirajDatumRojstva").val(podatki[2]);
	});
	$('#preberiObstojeciVitalniZnak').change(function() {
		$("#dodajMeritveVitalnihZnakovSporocilo").html("");
		var podatki = $(this).val().split("|");
		$("#dodajVitalnoEHR").val(podatki[0]);
		$("#dodajVitalnoDatumInUra").val(podatki[1]);
		$("#dodajVitalnoTelesnaVisina").val(podatki[2]);
		$("#dodajVitalnoTelesnaTeza").val(podatki[3]);
		$("#dodajVitalnoTelesnaTemperatura").val(podatki[4]);
		$("#dodajVitalnoKrvniTlakSistolicni").val(podatki[5]);
		$("#dodajVitalnoKrvniTlakDiastolicni").val(podatki[6]);
		$("#dodajVitalnoNasicenostKrviSKisikom").val(podatki[7]);
		$("#dodajVitalnoMerilec").val(podatki[8]);
	});
	$('#preberiEhrIdZaVitalneZnake').change(function() {
		$("#preberiMeritveVitalnihZnakovSporocilo").html("");
		$("#rezultatMeritveVitalnihZnakov").html("");
		$("#meritveVitalnihZnakovEHRid").val($(this).val());
	});
});