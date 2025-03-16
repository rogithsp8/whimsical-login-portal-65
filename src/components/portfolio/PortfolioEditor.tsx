
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { User, Briefcase, Award, Bookmark, Image, Layout, Save } from 'lucide-react';

const PortfolioEditor = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    setSaving(true);
    // Simulate API call
    setTimeout(() => {
      setSaving(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <h1 className="text-3xl font-bold mb-6">Create Your Portfolio</h1>
      
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid grid-cols-5 mb-8">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User size={16} />
            <span className="hidden sm:inline">Profile</span>
          </TabsTrigger>
          <TabsTrigger value="experience" className="flex items-center gap-2">
            <Briefcase size={16} />
            <span className="hidden sm:inline">Experience</span>
          </TabsTrigger>
          <TabsTrigger value="projects" className="flex items-center gap-2">
            <Award size={16} />
            <span className="hidden sm:inline">Projects</span>
          </TabsTrigger>
          <TabsTrigger value="skills" className="flex items-center gap-2">
            <Bookmark size={16} />
            <span className="hidden sm:inline">Skills</span>
          </TabsTrigger>
          <TabsTrigger value="design" className="flex items-center gap-2">
            <Layout size={16} />
            <span className="hidden sm:inline">Design</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Add your personal details to make your portfolio stand out
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  placeholder="John Doe" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="title">Professional Title</Label>
                <Input 
                  id="title" 
                  placeholder="Web Developer" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="about">About Me</Label>
                <Textarea 
                  id="about" 
                  placeholder="Tell us about yourself" 
                  rows={5}
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="avatar">Profile Photo</Label>
                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 rounded-full bg-gray-100 flex items-center justify-center">
                    <Image size={24} className="text-gray-400" />
                  </div>
                  <Button variant="outline">Upload Photo</Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={handleSave} 
                disabled={saving}
                className="flex items-center gap-2"
              >
                <Save size={16} />
                {saving ? "Saving..." : "Save Profile"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="experience">
          <Card>
            <CardHeader>
              <CardTitle>Work Experience</CardTitle>
              <CardDescription>
                Add your work history and professional experience
              </CardDescription>
            </CardHeader>
            <CardContent className="py-8 text-center">
              <Briefcase size={48} className="mx-auto mb-4 text-gray-300" />
              <h3 className="text-lg font-medium mb-2">No experience added yet</h3>
              <p className="text-sm text-gray-500 mb-4">Add your work history to showcase your professional journey</p>
              <Button>Add Experience</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="projects">
          <Card>
            <CardHeader>
              <CardTitle>Projects</CardTitle>
              <CardDescription>
                Showcase your best work and portfolio projects
              </CardDescription>
            </CardHeader>
            <CardContent className="py-8 text-center">
              <Award size={48} className="mx-auto mb-4 text-gray-300" />
              <h3 className="text-lg font-medium mb-2">No projects added yet</h3>
              <p className="text-sm text-gray-500 mb-4">Add projects to demonstrate your skills and achievements</p>
              <Button>Add Project</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="skills">
          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
              <CardDescription>
                Highlight your technical and professional skills
              </CardDescription>
            </CardHeader>
            <CardContent className="py-8 text-center">
              <Bookmark size={48} className="mx-auto mb-4 text-gray-300" />
              <h3 className="text-lg font-medium mb-2">No skills added yet</h3>
              <p className="text-sm text-gray-500 mb-4">Add your skills to show what you're capable of</p>
              <Button>Add Skills</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="design">
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Design</CardTitle>
              <CardDescription>
                Customize how your portfolio looks and feels
              </CardDescription>
            </CardHeader>
            <CardContent className="py-8 text-center">
              <Layout size={48} className="mx-auto mb-4 text-gray-300" />
              <h3 className="text-lg font-medium mb-2">Design options</h3>
              <p className="text-sm text-gray-500 mb-4">Customize your portfolio's appearance and layout</p>
              <Button>Customize Design</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PortfolioEditor;
