using Design.Entity;
using Infrastructure.DataX;
using Infrastructure.ErrorHelper;
using Infrastructure.IServices;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Office.Interop.Excel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Services
{
    public class CreateAccServices : ICreateAccount
    {
        private readonly AppDbContext dbcontext;
        public CreateAccServices()
        {
            dbcontext = new AppDbContext();
        }

        public async Task<ErrorHel> CreateAc(ListAcc listAccs)
        {
            dbcontext.listAccs.Add(listAccs);
            await dbcontext.SaveChangesAsync();
            return ErrorHel.thanhCong;
        }

        public List<ListAcc> getDataAll()
        {
            var data = dbcontext.listAccs;
            
            if(data == null)
            {
                return null;
            }
            else
            {
                 return data.ToList();
            }
        }
    }
}
