from templates import app

app.config.from_object('configurations.DevelopmentConfig')
app.run()
