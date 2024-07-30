from django.db import models

STATE_CHOICES = (
   ("AN","Andaman and Nicobar Islands"),
   ("AP","Andhra Pradesh"),
   ("AR","Arunachal Pradesh"),
   ("AS","Assam"),
   ("BR","Bihar"),
   ("CG","Chhattisgarh"),
   ("CH","Chandigarh"),
   ("DN","Dadra and Nagar Haveli"),
   ("DD","Daman and Diu"),
   ("DL","Delhi"),
   ("GA","Goa"),
   ("GJ","Gujarat"),
   ("HR","Haryana"),
   ("HP","Himachal Pradesh"),
   ("JK","Jammu and Kashmir"),
   ("JH","Jharkhand"),
   ("KA","Karnataka"),
   ("KL","Kerala"),
   ("LA","Ladakh"),
   ("LD","Lakshadweep"),
   ("MP","Madhya Pradesh"),
   ("MH","Maharashtra"),
   ("MN","Manipur"),
   ("ML","Meghalaya"),
   ("MZ","Mizoram"),
   ("NL","Nagaland"),
   ("OD","Odisha"),
   ("PB","Punjab"),
   ("PY","Pondicherry"),
   ("RJ","Rajasthan"),
   ("SK","Sikkim"),
   ("TN","Tamil Nadu"),
   ("TS","Telangana"),
   ("TR","Tripura"),
   ("UP","Uttar Pradesh"),
   ("UK","Uttarakhand"),
   ("WB","West Bengal")
)

# Create your models here.
class Resume(models.Model):
    name=models.CharField(max_length=100,blank=False,default='')
    gender = models.CharField(max_length=10, blank=False, default='')
    dob = models.CharField(max_length=25, blank=False, default='')
    locality = models.CharField(max_length=150, blank=False, default='')
    states = models.CharField(max_length=150, blank=False, default='')
    city = models.CharField(max_length=150, blank=False, default='')
    email = models.EmailField(max_length=100, blank=False, default='')
    mobileno = models.PositiveIntegerField( blank=False, default='')
    pin = models.PositiveIntegerField( blank=False, default='')
    job_city=models.CharField(max_length=100,blank=False,default='')
    prfl_image = models.ImageField(upload_to='static/')
    file_image = models.FileField(upload_to='static/')