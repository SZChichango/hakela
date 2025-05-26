"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { PlusIcon } from "lucide-react";

interface InvoiceItem {
  description: string;
  quantity: number;
  price: number;
}

export default function InvoiceForm() {
  const [items, setItems] = useState<InvoiceItem[]>([
    { description: "", quantity: 1, price: 0 },
  ]);

  const handleItemChange = (
    index: number,
    field: keyof InvoiceItem,
    value: string | number
  ) => {
    const updated = [...items];
    updated[index][field] = value as never;
    setItems(updated);
  };

  const addItem = () => {
    setItems([...items, { description: "", quantity: 1, price: 0 }]);
  };

  const calculateSubtotal = (): number => {
    return items.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">Business Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Business Name</Label>
              <Input placeholder="Your Business Name" />
            </div>
            <div>
              <Label>Email</Label>
              <Input placeholder="you@example.com" type="email" />
            </div>
            <div>
              <Label>Phone Number</Label>
              <Input placeholder="+258 84 123 4567" />
            </div>
          </div>

          <h2 className="text-xl font-semibold pt-6">Client Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Client Name</Label>
              <Input placeholder="Client Name" />
            </div>
            <div>
              <Label>Client Email</Label>
              <Input placeholder="client@example.com" type="email" />
            </div>
          </div>

          <h2 className="text-xl font-semibold pt-6">Invoice Items</h2>
          <div className="space-y-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                <div>
                  <Label>Description</Label>
                  <Input
                    value={item.description}
                    onChange={(e) =>
                      handleItemChange(index, "description", e.target.value)
                    }
                  />
                </div>
                <div>
                  <Label>Quantity</Label>
                  <Input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleItemChange(
                        index,
                        "quantity",
                        Number(e.target.value)
                      )
                    }
                  />
                </div>
                <div>
                  <Label>Unit Price</Label>
                  <Input
                    type="number"
                    value={item.price}
                    onChange={(e) =>
                      handleItemChange(index, "price", Number(e.target.value))
                    }
                  />
                </div>
              </div>
            ))}
            <Button variant="ghost" onClick={addItem} className="mt-2 text-sm">
              <PlusIcon className="w-4 h-4 mr-2" /> Add Item
            </Button>
          </div>

          <div className="pt-4">
            <Label>Additional Notes</Label>
            <Textarea placeholder="Thank you for your business!" />
          </div>

          <div className="pt-4 text-right">
            <p className="text-lg font-semibold">
              Subtotal: {calculateSubtotal().toFixed(2)}
            </p>
          </div>

          <div className="flex justify-end pt-6 space-x-4">
            <Button variant="outline">Preview Invoice</Button>
            <Button>Generate PDF</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
