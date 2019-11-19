# -*- coding: utf-8 -*-
# Generated by Django 1.11.26 on 2019-11-15 21:51
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('payment', '0020_auto_20191004_1520'),
    ]

    operations = [
        migrations.AlterField(
            model_name='source',
            name='card_type',
            field=models.CharField(blank=True, choices=[('mastercard', 'MasterCard'), ('discover', 'Discover'), ('visa', 'Visa'), ('american_express', 'American Express')], max_length=255, null=True),
        ),
    ]
