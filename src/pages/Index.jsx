import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My Application</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
          <CardDescription>This is a bare-bones application you can build upon.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Start adding your content and functionality here.</p>
        </CardContent>
        <CardFooter>
          <Button>Get Started</Button>
        </CardFooter>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Feature 1</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Description of feature 1</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Feature 2</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Description of feature 2</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;