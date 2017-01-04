# Estructura de base de datos

## firebase.USER

```
{
  "displayName": "Ale Quadri",
  "email": "ale@quadri.com.ar",
  "photoURL": "https://firebasestorage.googleapis.com/v0/b/eventtutorial-723dc.appspot.com/o/guestProfile%2F-KVWMYY-4Vt1XbQEX3CF%2FprofilePicture.png?alt=media&token=106d2294-0239-4abd-b13b-37c21f9839d6",
  "uid": "alsdkfjadlk"

}
```

## firebase.database

### Profile data

```
{
  "userProfile": {
    "uid": {
      "firstName": "Alejandro",
      "lastName": "Quadri",
      "birthDate": "1983-03-11",
      "coach": false,
      "coachId": "coachUid",
      "bio": "Libertario, casi anarquista",
      "objetivo": "Sentirme saludable",
      "weightLogs": [
        {
          "timestamp": "10/11/2016",
          "log": 98
        },
        {
          "timestamp": "11/11/2016",
          "log": 97
        }]
    }
  }
}
```
### Diary data

```
{
  "diary": {
    "uid":{
      "20161001": {
        "breakfast": [
          {
            "text":"Carne con papas",
            "images": [
              {
                "url":"https://firebasestorage.googleapis.com/v0/...",
                "path": "./folder/iphone/2039840239.jpg"
              },
              {
                "url":"https://firebasestorage.googleapis.com/v0/...",
                "path": "./folder/iphone/2039840239.jpg"
              }
            ],
            "feedback": {
              "icon": true,
              "message": "link" //aca iria el link al mensaje en cuestion
            }
          }
        ]
      }
    }
  }
}
