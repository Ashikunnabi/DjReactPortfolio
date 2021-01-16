from django.db import models
    

class Skill(models.Model):
    title = models.CharField(max_length=50)
    is_fab_icon = models.BooleanField(default=True) 
    icon = models.CharField(max_length=50)
    button_color = models.CharField(max_length=50)
    rank = models.IntegerField(default=99)
    
    def __str__(self):
        return self.title

class Project(models.Model):
    title = models.CharField(max_length=50)
    is_fab_icon = models.BooleanField(default=True) 
    icon = models.CharField(max_length=50)
    technology = models.CharField(max_length=50) # Django/React
    technology_stacks = models.TextField() # All technology write as: HTML\nCSS\nDjango\nReact\nJavaScript
    description = models.TextField()
    show_image = models.BooleanField(default=True) # If show_image=False then video will be visible
    image = models.FileField(blank=True, null=True)
    video = models.CharField(max_length=2000, blank=True, null=True)
    show_github = models.BooleanField(default=True)    
    github = models.CharField(max_length=2000, blank=True, null=True)
    show_website = models.BooleanField(default=True)    
    website = models.CharField(max_length=2000, blank=True, null=True)
    rank = models.IntegerField(default=999)
    
    def __str__(self):
        return self.title
        
class Quote(models.Model):
    source = models.TextField(blank=True, null=True)
    image = models.FileField()
    show_as_carousel = models.BooleanField(default=False)
        
class Blog(models.Model):
    title = models.CharField(max_length=50)
    image = models.FileField()
    published_date = models.DateField()
    description = models.TextField()
    tag = models.TextField(blank=True, null=True)
    url = models.CharField(max_length=2000, blank=True, null=True)
    
    def __str__(self):
        return self.title


    
    
    
    
    
    
    

