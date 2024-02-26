# Generated by Django 5.0.2 on 2024-02-22 00:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("authorization_app", "0003_userinfo_username"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="userinfo",
            name="username",
        ),
        migrations.AddField(
            model_name="userinfo",
            name="password",
            field=models.CharField(default="", max_length=200),
        ),
    ]