using Design.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Design.Entity
{
    public class ListAcc : BaseEntity
    {
        public string Address { get; set; }
        public string PrivateKey { get; set; }
        public string mnemonic { get; set; }
    }
}
