# SINGLY LINKED LIST
class node:
    def __init__(self, item=none,next=none):
        self.item=item#localvariable
        self.next=next
class SLL:
    def __init__(self,start=None):
        self.start=start
    def is_empty(self):
        return self.start==None
    def insert_at_start(self,data):
        n=node(data,self.start)
        self.start=n
    def insert_at_last(self,data):
        if not self.is_empty():
            temp=self.start
        while temp.next is not None:
            temp=temp.next
        temp.next=n           




mylist=SLL()#jab yeh object banega mylist refrence variavle hai jisme yeh object hai toh memory me start name ka box banega        
