
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  User, 
  Briefcase, 
  Award, 
  Code, 
  Bookmark,
  Image, 
  Layout, 
  Save, 
  Plus,
  Settings,
  Palette,
  Type,
  Heading1
} from 'lucide-react';

interface ElementProps {
  id: string;
  type: string;
  content: string;
  position: { x: number; y: number };
}

const CanvaStylePortfolioEditor: React.FC = () => {
  const [elements, setElements] = useState<ElementProps[]>([]);
  const [currentTemplate, setCurrentTemplate] = useState("minimal");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [saving, setSaving] = useState(false);

  const addElement = (type: string) => {
    const newElement = {
      id: `element-${Date.now()}`,
      type,
      content: type === 'heading' ? 'Your Name' : 
              type === 'subheading' ? 'Your Title' : 
              type === 'paragraph' ? 'Add your description here...' : '',
      position: { x: 100, y: 100 },
    };
    setElements([...elements, newElement]);
  };

  const handleElementDragStart = (e: React.DragEvent, id: string) => {
    e.dataTransfer.setData('elementId', id);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('elementId');
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setElements(elements.map(element => 
      element.id === id ? { ...element, position: { x, y } } : element
    ));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleSave = () => {
    setSaving(true);
    // Simulate API call
    setTimeout(() => {
      setSaving(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Sidebar - Tools */}
        <div className="w-full lg:w-64 bg-white rounded-lg shadow-sm border border-gray-200">
          <Tabs defaultValue="elements" className="w-full">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="elements" className="flex items-center gap-2">
                <Type size={16} />
                <span>Elements</span>
              </TabsTrigger>
              <TabsTrigger value="templates" className="flex items-center gap-2">
                <Layout size={16} />
                <span>Templates</span>
              </TabsTrigger>
              <TabsTrigger value="styles" className="flex items-center gap-2">
                <Palette size={16} />
                <span>Styles</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="elements" className="p-4 space-y-4">
              <h3 className="font-medium text-sm">Text</h3>
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  variant="outline" 
                  onClick={() => addElement('heading')}
                  className="flex flex-col items-center justify-center h-20 text-xs"
                >
                  <Heading1 size={24} className="mb-1" />
                  Heading
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => addElement('subheading')}
                  className="flex flex-col items-center justify-center h-20 text-xs"
                >
                  <Type size={24} className="mb-1" />
                  Subheading
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => addElement('paragraph')}
                  className="flex flex-col items-center justify-center h-20 text-xs"
                >
                  <Type size={24} className="mb-1" />
                  Paragraph
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => addElement('image')}
                  className="flex flex-col items-center justify-center h-20 text-xs"
                >
                  <Image size={24} className="mb-1" />
                  Image
                </Button>
              </div>
              
              <h3 className="font-medium text-sm mt-4">Sections</h3>
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  variant="outline" 
                  className="flex flex-col items-center justify-center h-20 text-xs"
                >
                  <User size={24} className="mb-1" />
                  About
                </Button>
                <Button 
                  variant="outline" 
                  className="flex flex-col items-center justify-center h-20 text-xs"
                >
                  <Briefcase size={24} className="mb-1" />
                  Experience
                </Button>
                <Button 
                  variant="outline" 
                  className="flex flex-col items-center justify-center h-20 text-xs"
                >
                  <Award size={24} className="mb-1" />
                  Projects
                </Button>
                <Button 
                  variant="outline" 
                  className="flex flex-col items-center justify-center h-20 text-xs"
                >
                  <Code size={24} className="mb-1" />
                  Skills
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="templates" className="p-4 space-y-4">
              <h3 className="font-medium text-sm">Portfolio Templates</h3>
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  variant={currentTemplate === "minimal" ? "default" : "outline"}
                  onClick={() => setCurrentTemplate("minimal")}
                  className="flex flex-col items-center justify-center h-32 text-xs relative overflow-hidden"
                >
                  <div className="absolute inset-2 bg-gray-100 rounded flex flex-col items-center p-2">
                    <div className="w-10 h-10 rounded-full bg-gray-300 mb-1"></div>
                    <div className="w-16 h-2 bg-gray-300 mb-1"></div>
                    <div className="w-14 h-2 bg-gray-300 mb-1"></div>
                    <div className="w-12 h-1 bg-gray-300"></div>
                  </div>
                  <span className="absolute bottom-2">Minimal</span>
                </Button>
                <Button 
                  variant={currentTemplate === "creative" ? "default" : "outline"}
                  onClick={() => setCurrentTemplate("creative")}
                  className="flex flex-col items-center justify-center h-32 text-xs relative overflow-hidden"
                >
                  <div className="absolute inset-2 bg-gray-100 rounded flex flex-col items-start p-2">
                    <div className="w-full flex justify-between mb-1">
                      <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                      <div className="w-16 h-8 bg-gray-300 rounded"></div>
                    </div>
                    <div className="w-16 h-2 bg-gray-300 mb-1"></div>
                    <div className="w-12 h-1 bg-gray-300"></div>
                  </div>
                  <span className="absolute bottom-2">Creative</span>
                </Button>
                <Button 
                  variant={currentTemplate === "professional" ? "default" : "outline"}
                  onClick={() => setCurrentTemplate("professional")}
                  className="flex flex-col items-center justify-center h-32 text-xs relative overflow-hidden"
                >
                  <div className="absolute inset-2 bg-gray-100 rounded flex flex-col p-2">
                    <div className="w-full h-6 bg-gray-300 mb-2 rounded"></div>
                    <div className="flex gap-1">
                      <div className="w-1/3 h-24 bg-gray-300 rounded"></div>
                      <div className="w-2/3 space-y-1">
                        <div className="w-full h-4 bg-gray-300 rounded"></div>
                        <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
                        <div className="w-full h-4 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                  </div>
                  <span className="absolute bottom-2">Professional</span>
                </Button>
                <Button 
                  variant={currentTemplate === "modern" ? "default" : "outline"}
                  onClick={() => setCurrentTemplate("modern")}
                  className="flex flex-col items-center justify-center h-32 text-xs relative overflow-hidden"
                >
                  <div className="absolute inset-2 bg-gray-100 rounded grid grid-cols-2 gap-1 p-2">
                    <div className="col-span-1 bg-gray-300 rounded"></div>
                    <div className="col-span-1 bg-gray-300 rounded"></div>
                    <div className="col-span-2 bg-gray-300 rounded h-8"></div>
                    <div className="col-span-1 bg-gray-300 rounded"></div>
                    <div className="col-span-1 bg-gray-300 rounded"></div>
                  </div>
                  <span className="absolute bottom-2">Modern</span>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="styles" className="p-4">
              <h3 className="font-medium text-sm mb-4">Customize Design</h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="background">Background Color</Label>
                  <div className="flex gap-2">
                    <div 
                      className="w-10 h-10 rounded border border-gray-300 cursor-pointer"
                      style={{ backgroundColor }}
                    ></div>
                    <Input 
                      id="background" 
                      type="color" 
                      value={backgroundColor}
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      className="w-full h-10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="fontFamily">Font Family</Label>
                  <Select defaultValue="inter">
                    <SelectTrigger id="fontFamily">
                      <SelectValue placeholder="Select font" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inter">Inter</SelectItem>
                      <SelectItem value="roboto">Roboto</SelectItem>
                      <SelectItem value="montserrat">Montserrat</SelectItem>
                      <SelectItem value="playfair">Playfair Display</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="colorScheme">Color Scheme</Label>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="h-8 bg-blue-500 rounded cursor-pointer"></div>
                    <div className="h-8 bg-purple-500 rounded cursor-pointer"></div>
                    <div className="h-8 bg-green-500 rounded cursor-pointer"></div>
                    <div className="h-8 bg-rose-500 rounded cursor-pointer"></div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Main Canvas Area */}
        <div className="flex-1">
          <div 
            className="border border-gray-300 bg-white rounded-lg shadow-sm min-h-[600px] relative overflow-hidden"
            style={{ backgroundColor }}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {elements.map((element) => (
              <div
                key={element.id}
                draggable
                onDragStart={(e) => handleElementDragStart(e, element.id)}
                className="absolute cursor-move p-2 border border-transparent hover:border-blue-400 rounded"
                style={{ 
                  left: `${element.position.x}px`, 
                  top: `${element.position.y}px`,
                }}
              >
                {element.type === 'heading' && (
                  <h1 className="text-3xl font-bold">{element.content}</h1>
                )}
                {element.type === 'subheading' && (
                  <h2 className="text-xl font-medium text-gray-600">{element.content}</h2>
                )}
                {element.type === 'paragraph' && (
                  <p className="text-gray-700">{element.content}</p>
                )}
                {element.type === 'image' && (
                  <div className="w-32 h-32 bg-gray-200 flex items-center justify-center rounded">
                    <Image className="text-gray-400" />
                  </div>
                )}
              </div>
            ))}
            
            {elements.length === 0 && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                <Layout size={48} className="mb-2" />
                <p>Drag and drop elements from the left panel</p>
              </div>
            )}
          </div>
          
          <div className="mt-4 flex justify-between">
            <Button variant="outline" className="flex items-center gap-2">
              <Settings size={16} />
              Page Settings
            </Button>
            <Button onClick={handleSave} disabled={saving} className="flex items-center gap-2">
              <Save size={16} />
              {saving ? "Saving..." : "Save Portfolio"}
            </Button>
          </div>
        </div>
        
        {/* Right Sidebar - Properties */}
        <div className="w-full lg:w-64 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h3 className="font-medium text-sm mb-4">Element Properties</h3>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="elementText">Text Content</Label>
              <Textarea id="elementText" placeholder="Edit text content..." />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="fontSize">Font Size</Label>
              <Select defaultValue="16">
                <SelectTrigger id="fontSize">
                  <SelectValue placeholder="Font size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="12">12px</SelectItem>
                  <SelectItem value="14">14px</SelectItem>
                  <SelectItem value="16">16px</SelectItem>
                  <SelectItem value="18">18px</SelectItem>
                  <SelectItem value="24">24px</SelectItem>
                  <SelectItem value="32">32px</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="fontWeight">Font Weight</Label>
              <Select defaultValue="normal">
                <SelectTrigger id="fontWeight">
                  <SelectValue placeholder="Font weight" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="bold">Bold</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="textAlign">Text Alignment</Label>
              <div className="grid grid-cols-4 gap-2">
                <Button variant="outline" size="sm" className="p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="21" x2="3" y1="6" y2="6"/><line x1="15" x2="3" y1="12" y2="12"/><line x1="17" x2="3" y1="18" y2="18"/></svg>
                </Button>
                <Button variant="outline" size="sm" className="p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="21" x2="3" y1="6" y2="6"/><line x1="21" x2="3" y1="12" y2="12"/><line x1="21" x2="3" y1="18" y2="18"/></svg>
                </Button>
                <Button variant="outline" size="sm" className="p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="21" x2="3" y1="6" y2="6"/><line x1="21" x2="9" y1="12" y2="12"/><line x1="21" x2="7" y1="18" y2="18"/></svg>
                </Button>
                <Button variant="outline" size="sm" className="p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="21" x2="3" y1="6" y2="6"/><line x1="21" x2="11" y1="12" y2="12"/><line x1="21" x2="9" y1="18" y2="18"/></svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanvaStylePortfolioEditor;
